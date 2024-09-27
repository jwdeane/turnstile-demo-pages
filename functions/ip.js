export async function onRequestGet(context) {
  const ip = context.request.headers.get("CF-Connecting-IP");
  return new Response(JSON.stringify({ data: ip }));
}
