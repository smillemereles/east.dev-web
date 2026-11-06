# Project rules

- Portfolio work metadata is localized by the page and passed as optional captions to the shared scroll grid; keep captions available on hover, keyboard focus, touch screens, and with reduced motion so animation never removes a work's context.- Language lives in the URL ("/" Spanish, "/en/*", "/pt/*"); routes are generated per prefix in App.tsx and LocaleSeo owns canonical/hreflang for every route, so pages must not set their own canonical or og:url.
