# Alireza Moazeni — Personal Website

Personal academic homepage of **Alireza Moazeni**, Ph.D. student at Simon Fraser University.

🌐 **Live:** https://amoazeni75.github.io

## Stack

Plain static **HTML / CSS / JS** — no build step. Flat Material Design.

```
index.html             # the entire page
material.css           # Material Design layer (loaded last, overrides base)
stylesheet.css         # base typography & colors
styles_responsive.css  # layout / responsive grid
show_bib.js            # BibTeX show/hide toggle
images/                # profile photo, paper thumbnails, favicon
.nojekyll              # tell GitHub Pages not to run Jekyll
.github/workflows/     # GitHub Pages deploy (static upload)
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Push to `master` — the GitHub Actions workflow publishes the static files to GitHub Pages automatically.

> The previous Jekyll (al-folio) version is preserved on the `jekyll-site-backup` branch.
