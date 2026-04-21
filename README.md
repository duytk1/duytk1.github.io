# Portfolio - David Truong

Personal portfolio: **static HTML + CSS + vanilla JavaScript** (no Vite, no React, no npm build).

## Local preview

Open `index.html` in a browser, or use any static file server from this folder, for example:

```bash
npx serve .
```

Then open the URL it prints (needed if `file://` asset loading is blocked).

## Deploy (GitHub Pages)

1. **One-time:** **Settings → Pages → Source:** **GitHub Actions**.
2. **Push** to `main` or `master`. The workflow copies `index.html`, `styles.css`, `portfolio.js`, `.nojekyll`, and any **`images/`**, **`videos/`**, **`public/images/`**, **`public/videos/`** into the published site.

## Edit content

- **Projects & contact:** edit `portfolio.js` (the `projects` array and `CONTACT_EMAIL` constants at the top).
- **Styles:** edit `styles.css`.
- **Title:** edit `<title>` in `index.html`.

## Assets

Put images and videos where the paths in `portfolio.js` expect them, for example:

- **`images/`** at the repo root (recommended), or **`public/images/`** (also copied into the live site as `images/`).
- **`videos/`** or **`public/videos/`** the same way.

Paths in `portfolio.js` are **relative** (e.g. `images/screenshot.png`) so they work on GitHub Pages and locally.

## License

Private project; all rights reserved unless you choose to add an open license.
