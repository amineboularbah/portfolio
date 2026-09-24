# Personal sharing card

`social-card.html` is the editable source for `public/social/amine-boularbah-social-v1.png`. It uses Amine's existing monochrome portrait, the site's self-hosted Manrope font, and the portfolio's paper, ink, and teal palette. The portrait is placed unchanged in the layout. It keeps the personal engineering identity separate from company branding. This design source is not a public website route.

The export is a 1200 × 630 PNG for LinkedIn previews and manual image uploads, following [LinkedIn's landscape sharing requirements](https://www.linkedin.com/help/linkedin/answer/a521928).

## Export

1. Install this repository's dependencies so the local font is available.
2. Serve this repository's root with a local static server bound to `127.0.0.1`, then open `/design/social-card.html` in Chromium.
3. Use a 1200 × 630 viewport, a device scale factor of 1, and 100% zoom. Wait for `document.fonts.ready` and the portrait's `decode()` promise.
4. Capture the viewport as a PNG and inspect the result, including a thumbnail-size preview.
5. For future changes, export under a new versioned filename and update `site.socialImage.path` and the sharing-image test. Keep old published filenames available for existing shares. Run `npm run validate`.

All English, French, and Spanish pages share this image, with alternative text localized to the page language. Open Graph and Twitter/X metadata include the HTTPS image URL, dimensions, MIME type, and large-preview format. The older `/social-card.png` and its SVG remain available for existing references. Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to refresh LinkedIn's cached preview of a previously shared URL.
