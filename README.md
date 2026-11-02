# Boo Wyane — Applied AI Engineering

A responsive, project-led portfolio based on the supplied resume. Built with semantic HTML, CSS, and a small progressive JavaScript enhancement for mobile navigation.

## Run locally

From the repository root:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory site/dist
```

Open `http://127.0.0.1:4173`. No package installation or build step is required.

## Edit

- `site/dist/index.html`: content, project details, professional links, and metadata.
- `site/dist/styles.css`: responsive layout, typography, focus states, and print styles.
- `site/dist/script.js`: mobile navigation enhancement. Main content, project details, and links work without JavaScript.
- `site/dist/assets/`: supplied portrait and downloadable resume, copied without modification.
- `site/.openai/hosting.json`: Sites identity and deployment directory.

Fonts load from Google Fonts, with system fallbacks. Diagrams are conceptual illustrations, clearly labelled, rather than claimed project screenshots.

## Checks

```powershell
node --check site/dist/script.js
```

The delivery check includes local asset resolution, desktop/mobile browser inspection, keyboard navigation, project disclosures, and an independent factual and code review. See the approved design and implementation plan under `docs/superpowers/`.

## Source accuracy

The IBM AI Engineering certificate is in progress. Project performance metrics and production deployment claims are not asserted. The only project-specific source URL supplied by the resume is the staff badge detector; the other work has no invented links.
