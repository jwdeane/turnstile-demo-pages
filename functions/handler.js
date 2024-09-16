// This is the demo secret key. In prod, we recommend you store
// your secret key(s) safely.

const SECRET_KEY = "1x0000000000000000000000000000000AA";

export async function onRequestPost(context) {
  // return new Response(`Hello!! ${SECRET_KEY}`);
  const body = await context.request.formData();
  const token = body.get("cf-turnstile-response");
  const ip = context.request.headers.get("CF-Connecting-IP");

  // Validate the token by calling the "/siteverify" API.
  let formData = new FormData();
  formData.append("secret", SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      body: formData,
      method: "POST",
    }
  );
  const outcome = await result.json();
  console.log(outcome);
  if (!outcome.success) {
    return new Response(
      "The provided Turnstile token was not valid! \n" + JSON.stringify(outcome)
    );
  }
  // The Turnstile token was successfuly validated. Proceed with your application logic.
  // Validate login, redirect user, etc.
  // For this demo, we just echo the "/siteverify" response:
  return new Response(
    "Turnstile token successfuly validated. \n" + JSON.stringify(outcome)
  );
}
