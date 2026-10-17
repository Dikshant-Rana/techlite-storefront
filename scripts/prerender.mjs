import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

// 1. Check template existence & capture cryptographic snapshot
if (!fs.existsSync(templatePath)) {
  console.error('Fatal Error: dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateRaw = fs.readFileSync(templatePath, 'utf-8');
const templatePreHash = crypto.createHash('sha256').update(templateRaw).digest('hex');
const templatePreStat = fs.statSync(templatePath);

// 2. Validate required template markers
if (!templateRaw.includes('</head>')) {
  console.error('Fatal Error: dist/index.html missing required "</head>" tag.');
  process.exit(1);
}
if (!templateRaw.includes('<div id="root"></div>')) {
  console.error('Fatal Error: dist/index.html missing required \'<div id="root"></div>\'.');
  process.exit(1);
}
if (!/<title[\s>]/i.test(templateRaw)) {
  console.error('Fatal Error: dist/index.html missing required "<title>" tag.');
  process.exit(1);
}

// 3. Load servicesData reliably using Vite SSR module loader (zero regex, zero new Function)
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom'
});

let servicesData;
try {
  const mod = await vite.ssrLoadModule('/src/data/servicesData.ts');
  servicesData = mod.servicesData;
} catch (err) {
  console.error('Fatal Error: Failed to load src/data/servicesData.ts via Vite SSR:', err);
  await vite.close();
  process.exit(1);
} finally {
  await vite.close();
}

// 4. Pre-flight validation of all service fields
if (!Array.isArray(servicesData) || servicesData.length !== 6) {
  console.error(`Fatal Validation Error: Expected 6 services, found ${servicesData?.length}`);
  process.exit(1);
}

const requiredStringFields = ['slug', 'title', 'category', 'desc', 'longDesc'];
const requiredArrayFields = ['services', 'problems', 'features', 'whyChooseUs', 'process', 'faqs'];

for (const [index, service] of servicesData.entries()) {
  const id = `Service #${index + 1} (${service?.slug || 'unknown'})`;

  if (!service.slug || typeof service.slug !== 'string' || !/^[a-z0-9-]+$/.test(service.slug)) {
    console.error(`Fatal Validation Error: ${id} has invalid slug: "${service?.slug}"`);
    process.exit(1);
  }

  for (const field of requiredStringFields) {
    if (!service[field] || typeof service[field] !== 'string' || service[field].trim().length === 0) {
      console.error(`Fatal Validation Error: ${id} missing required string field: "${field}"`);
      process.exit(1);
    }
  }

  if (!service.seo || typeof service.seo !== 'object') {
    console.error(`Fatal Validation Error: ${id} missing required "seo" object`);
    process.exit(1);
  }
  if (!service.seo.title || typeof service.seo.title !== 'string' || service.seo.title.trim().length < 10) {
    console.error(`Fatal Validation Error: ${id} has missing or too short seo.title`);
    process.exit(1);
  }
  if (!service.seo.description || typeof service.seo.description !== 'string' || service.seo.description.trim().length < 30) {
    console.error(`Fatal Validation Error: ${id} has missing or too short seo.description`);
    process.exit(1);
  }

  for (const field of requiredArrayFields) {
    if (!Array.isArray(service[field]) || service[field].length === 0) {
      console.error(`Fatal Validation Error: ${id} missing or empty array: "${field}"`);
      process.exit(1);
    }
  }

  for (const [faqIdx, faq] of service.faqs.entries()) {
    if (!faq.question || typeof faq.question !== 'string' || !faq.answer || typeof faq.answer !== 'string') {
      console.error(`Fatal Validation Error: ${id} FAQ #${faqIdx + 1} invalid question or answer`);
      process.exit(1);
    }
  }
}
console.log('✓ Pre-flight validation passed for all 6 services.');

// 5. Generate prerendered route HTML for each service
for (const service of servicesData) {
  const routePath = `/services/${service.slug}`;
  const targetDir = path.join(distDir, 'services', service.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const canonicalUrl = `https://techlite.com.np${routePath}`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "TechLite Groups",
        "image": "https://techlite.com.np/og-image.png",
        "telephone": "+977 9801944800",
        "email": "techlitegroups@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "School Road, Hetauda-4",
          "addressLocality": "Hetauda",
          "addressRegion": "Makwanpur",
          "addressCountry": "NP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.428608,
          "longitude": 85.032705
        },
        "url": "https://techlite.com.np"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techlite.com.np/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://techlite.com.np/services" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": canonicalUrl }
        ]
      },
      {
        "@type": "Service",
        "name": service.title,
        "description": service.seo.description,
        "serviceType": service.category,
        "provider": {
          "@type": "LocalBusiness",
          "name": "TechLite Groups",
          "url": "https://techlite.com.np"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Hetauda, Makwanpur, Nepal"
        }
      }
    ]
  };

  const longDescHtml = service.longDesc
    .split('\n\n')
    .map(p => `<p style="line-height:1.7; color:#334155; margin-bottom:1rem;">${escapeHtml(p)}</p>`)
    .join('');

  const servicesListHtml = (service.services || [])
    .map(s => `<li style="margin-bottom:0.5rem; color:#334155;">${escapeHtml(s)}</li>`)
    .join('');

  const problemsListHtml = (service.problems || [])
    .map(p => `<li style="margin-bottom:0.5rem; color:#b91c1c;">${escapeHtml(p)}</li>`)
    .join('');

  const whyChooseUsHtml = (service.whyChooseUs || [])
    .map(w => `<li style="margin-bottom:0.5rem; color:#334155;">${escapeHtml(w)}</li>`)
    .join('');

  const featuresHtml = (service.features || [])
    .map(f => `<li style="margin-bottom:0.5rem; color:#334155;">${escapeHtml(f)}</li>`)
    .join('');

  const processHtml = (service.process || [])
    .map((step, idx) => `<li style="margin-bottom:0.75rem; color:#334155;"><strong>Step ${idx + 1}:</strong> ${escapeHtml(step)}</li>`)
    .join('');

  const faqsHtml = (service.faqs || [])
    .map(faq => `
      <article style="margin-bottom:1.5rem; border-bottom:1px solid #f1f5f9; padding-bottom:1rem;">
        <h3 style="font-size:1.1rem; color:#0f172a; margin-bottom:0.35rem;">${escapeHtml(faq.question)}</h3>
        <p style="color:#475569; line-height:1.6;">${escapeHtml(faq.answer)}</p>
      </article>`)
    .join('');

  const fallbackBody = `
  <div id="root">
    <header style="padding:1rem 1.5rem; border-bottom:1px solid #e2e8f0; font-family:sans-serif; background:#fff;">
      <nav aria-label="Breadcrumb">
        <a href="/" style="color:#066291; text-decoration:none;">Home</a> / 
        <a href="/services" style="color:#066291; text-decoration:none;">Services</a> / 
        <span style="color:#64748b;">${escapeHtml(service.title)}</span>
      </nav>
    </header>
    <main style="padding:2.5rem 1.5rem; max-width:1100px; margin:0 auto; font-family:sans-serif;">
      <span style="font-size:0.75rem; font-weight:bold; color:#066291; text-transform:uppercase; letter-spacing:0.05em; background:#f0f9ff; padding:0.25rem 0.75rem; border-radius:9999px; border:1px solid #e0f2fe;">${escapeHtml(service.category)}</span>
      <h1 style="font-size:2.5rem; font-weight:bold; color:#0f172a; margin:1rem 0 0.5rem 0; line-height:1.15;">${escapeHtml(service.title)}</h1>
      <p style="font-size:1.2rem; color:#475569; margin:0 0 2rem 0; line-height:1.6;">${escapeHtml(service.desc)}</p>
      
      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">About the Service</h2>
        ${longDescHtml}
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">What We Do (Service Scope)</h2>
        <ul style="padding-left:1.5rem; line-height:1.6;">${servicesListHtml}</ul>
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">Common Problems We Solve</h2>
        <ul style="padding-left:1.5rem; line-height:1.6;">${problemsListHtml}</ul>
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">Why Choose TechLite Groups</h2>
        <ul style="padding-left:1.5rem; line-height:1.6;">${whyChooseUsHtml}</ul>
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">Key Features & Guarantees</h2>
        <ul style="padding-left:1.5rem; line-height:1.6;">${featuresHtml}</ul>
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1rem;">Our Service Process</h2>
        <ol style="padding-left:1.5rem; line-height:1.6;">${processHtml}</ol>
      </section>

      <section style="margin-bottom:3rem;">
        <h2 style="font-size:1.75rem; font-weight:bold; color:#0f172a; margin-bottom:1.5rem;">Frequently Asked Questions</h2>
        ${faqsHtml}
      </section>

      <section style="margin-top:3rem; padding:2rem; background:#f8fafc; border-radius:1rem; border:1px solid #e2e8f0;">
        <h2 style="font-size:1.5rem; font-weight:bold; color:#0f172a; margin-bottom:0.75rem;">Contact TechLite Groups in Hetauda</h2>
        <p style="color:#475569; margin-bottom:0.5rem;"><strong>Location:</strong> School Road, Hetauda-4, Makwanpur, Nepal</p>
        <p style="color:#475569; margin-bottom:0.5rem;"><strong>Phone:</strong> <a href="tel:+9779801944800" style="color:#066291; text-decoration:none;">+977 98019-44800</a> | <a href="tel:+9779801944803" style="color:#066291; text-decoration:none;">+977 98019-44803</a></p>
        <p style="color:#475569; margin-bottom:1rem;"><strong>Email:</strong> <a href="mailto:techlitegroups@gmail.com" style="color:#066291; text-decoration:none;">techlitegroups@gmail.com</a></p>
        <p><a href="/contact" style="display:inline-block; background:#066291; color:#fff; padding:0.75rem 1.5rem; border-radius:9999px; text-decoration:none; font-weight:bold; font-size:0.875rem;">Get in Touch &rarr;</a></p>
      </section>
    </main>
  </div>`;

  // 6. Metadata replacement (replaces existing <title> and ensures single instances)
  let html = templateRaw.replace(/<title[\s\S]*?<\/title>/i, `<title>${escapeHtml(service.seo.title)}</title>`);

  const metaBlock = `
    <meta name="description" content="${escapeHtml(service.seo.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(service.seo.title)}" />
    <meta property="og:description" content="${escapeHtml(service.seo.description)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://techlite.com.np/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(service.seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(service.seo.description)}" />
    <meta name="twitter:image" content="https://techlite.com.np/og-image.png" />
    <script type="application/ld+json">${JSON.stringify(schemaGraph)}</script>
  </head>`;

  html = html.replace('</head>', metaBlock);
  html = html.replace('<div id="root"></div>', fallbackBody);

  // 7. Strict post-generation assertions
  const titleCount = (html.match(/<title[\s>]/gi) || []).length;
  if (titleCount !== 1) {
    console.error(`Fatal Assertion Error: ${service.slug} has ${titleCount} <title> tags (expected exactly 1)`);
    process.exit(1);
  }

  const descCount = (html.match(/<meta[^>]*\bname=["']description["']/gi) || []).length;
  if (descCount !== 1) {
    console.error(`Fatal Assertion Error: ${service.slug} has ${descCount} description meta tags (expected exactly 1)`);
    process.exit(1);
  }

  const canonicalCount = (html.match(/<link[^>]*\brel=["']canonical["']/gi) || []).length;
  if (canonicalCount !== 1) {
    console.error(`Fatal Assertion Error: ${service.slug} has ${canonicalCount} canonical links (expected exactly 1)`);
    process.exit(1);
  }

  const expectedEscapedTitle = `<title>${escapeHtml(service.seo.title)}</title>`;
  if (!html.includes(expectedEscapedTitle)) {
    console.error(`Fatal Assertion Error: ${service.slug} missing expected title: ${expectedEscapedTitle}`);
    process.exit(1);
  }

  const expectedEscapedH1 = `<h1 style="font-size:2.5rem; font-weight:bold; color:#0f172a; margin:1rem 0 0.5rem 0; line-height:1.15;">${escapeHtml(service.title)}</h1>`;
  if (!html.includes(expectedEscapedH1)) {
    console.error(`Fatal Assertion Error: ${service.slug} missing expected H1: ${expectedEscapedH1}`);
    process.exit(1);
  }

  // Explicit check for double-escaping
  if (html.includes('&amp;amp;') || html.includes('&amp;quot;') || html.includes('&amp;#039;')) {
    console.error(`Fatal Assertion Error: ${service.slug} contains double-escaped HTML entities`);
    process.exit(1);
  }

  // Explicit check for ampersand validation on CCTV
  if (service.slug === 'cctv-installation-servicing') {
    if (!html.includes('CCTV Installation &amp; Servicing')) {
      console.error('Fatal Assertion Error: CCTV route missing escaped ampersand "CCTV Installation &amp; Servicing"');
      process.exit(1);
    }
  }

  const outputPath = path.join(targetDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`✓ Prerendered & validated: /services/${service.slug} -> dist/services/${service.slug}/index.html`);
}

// 8. Cryptographic Root-Shell Integrity Verification
const templatePostRaw = fs.readFileSync(templatePath, 'utf-8');
const templatePostHash = crypto.createHash('sha256').update(templatePostRaw).digest('hex');
const templatePostStat = fs.statSync(templatePath);

if (templatePreHash !== templatePostHash || templatePreStat.size !== templatePostStat.size) {
  console.error(`FATAL INTEGRITY ERROR: dist/index.html was modified during prerender execution!`);
  console.error(`Pre-hash:  ${templatePreHash} (${templatePreStat.size} bytes)`);
  console.error(`Post-hash: ${templatePostHash} (${templatePostStat.size} bytes)`);
  process.exit(1);
}

if (!templatePostRaw.includes('<div id="root"></div>')) {
  console.error('FATAL INTEGRITY ERROR: dist/index.html #root container was altered!');
  process.exit(1);
}

console.log(`✓ dist/index.html integrity verified: SHA-256 ${templatePostHash} (unmodified)`);
console.log('✓ Build-time prerendering completed successfully for all 6 service routes.');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
