import validServiceSlugs from '../src/data/serviceSlugs.json';

export async function onRequest(context) {
  const { request, env } = context;
  
  // new URL() automatically separates pathname from query params (?utm_source=google) and hash (#section)
  const url = new URL(request.url);
  const pathname = url.pathname;

  // 1. Static file extensions check (pass directly to asset serving)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return env.ASSETS.fetch(request);
  }

  // 2. Normalize pathname: strip trailing slash except for root '/'
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  // 3. Define valid static / SPA routes
  const staticValidRoutes = new Set([
    '/',
    '/about',
    '/products',
    '/downloads',
    '/contact',
    '/services'
  ]);

  if (staticValidRoutes.has(normalizedPath)) {
    return env.ASSETS.fetch(request);
  }

  // 4. Dynamic service route check: /services/:slug
  if (normalizedPath.startsWith('/services/')) {
    const slug = normalizedPath.slice('/services/'.length);
    const validSlugsSet = new Set(validServiceSlugs);

    if (validSlugsSet.has(slug)) {
      return env.ASSETS.fetch(request);
    }
  }

  // 5. Invalid Route -> Return 404.html with HTTP 404 status
  const fourOhFourUrl = new URL('/404.html', request.url);
  const fourOhFourResponse = await env.ASSETS.fetch(fourOhFourUrl);

  return new Response(fourOhFourResponse.body, {
    status: 404,
    statusText: 'Not Found',
    headers: fourOhFourResponse.headers
  });
}
