export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let targetUrl = url.pathname.slice(1);

    if (!targetUrl.startsWith('http')) {
      return new Response('Invalid target URL', { status: 400 });
    }

    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual',
    });

    const response = await fetch(newRequest);
    return response;
  }
};
