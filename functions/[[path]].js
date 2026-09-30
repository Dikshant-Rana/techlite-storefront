// Cloudflare Pages Function (Worker)
// Validates requested URLs against static SPA routes and service slugs.

const staticValidRoutes = new Set([
  '/',
  '/about',
  '/products',
  '/downloads',
  '/contact',
  '/services'
]);

const validServiceSlugs = new Set([
  'laptop-desktop-printer-repair',
  'computer-hardware-upgrades',
  'router-setup-network-wiring',
  'cctv-installation-servicing',
  'custom-pc-building',
  'data-recovery-software-installation'
]);

export async function onRequest(context) {
  const { request, env } = context;
  
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 1. Pass static asset requests directly to Cloudflare asset worker
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return env.ASSETS.fetch(request);
  }

  // 2. Normalize pathname: strip trailing slash except for root '/'
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  // Helper function to serve index.html with HTTP 200 for valid SPA routes
  const serveIndexHtml = () => {
    const indexUrl = new URL('/index.html', request.url);
    return env.ASSETS.fetch(indexUrl);
  };

  // 3. Check static valid routes
  if (staticValidRoutes.has(normalizedPath)) {
    return serveIndexHtml();
  }

  // 4. Dynamic service route check: /services/:slug
  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.slice('/services/'.length);

    if (validServiceSlugs.has(slug)) {
      return serveIndexHtml();
    }
  }

  // 5. Invalid Route -> Serve 404.html with HTTP 404 status
  const fourOhFourUrl = new URL('/404.html', request.url);
  const fourOhFourResponse = await env.ASSETS.fetch(fourOhFourUrl);

  return new Response(fourOhFourResponse.body, {
    status: 404,
    statusText: 'Not Found',
    headers: fourOhFourResponse.headers
  });
}
