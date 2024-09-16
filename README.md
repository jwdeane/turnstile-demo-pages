# Turnstile Demo: Pages

A simple demo with a Turnstile-protected form, using Cloudflare Pages.

With the code in this repository, we demonstrate [implicit rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#implicitly-render-the-turnstile-widget) and [explicit rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#explicitly-render-the-turnstile-widget).

## Setup

```sh
npm install
```

Obtain your Turnstile Secret Key from the [dashboard](https://dash.cloudflare.com/?to=/:account/turnstile) and add to a `.dev.vars` file in your project root:

```sh
SECRET_KEY=abc123-change-me
```

## Local testing

Start a local development server:

```sh
# wrangler pages dev OR
npm run dev

 ⛅️ wrangler 3.78.2
-------------------

✨ Compiled Worker successfully
Using vars defined in .dev.vars
Your worker has access to the following bindings:
- Vars:
  - SECRET_KEY: "(hidden)"
⎔ Starting local server...
[wrangler:inf] Ready on http://localhost:8788
╭───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ [b] open a browser, [d] open Devtools, [c] clear console, [x] to exit                                                                                                         │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Then press `b` to open the demo page in your browser.

## Deploy

Deploy via Wrangler:

```sh
# wrangler pages deploy OR
npm run deploy
```

Alternatively connect Cloudflare Pages to your git repository.

### IMPORTANT

⚠️ you **must** set the SECRET_KEY environment variable within your Pages project for the Turnstile verification to succeed.

```sh
wrangler pages secret put SECRET_KEY
```
