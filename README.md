# Boo Wyane — Applied AI Engineering

A responsive, project-led portfolio based on the supplied resume. Built with semantic HTML, CSS, and a small progressive JavaScript enhancement for mobile navigation.

Private review site: https://boo-wyane-ai-portfolio.wyaneboo.chatgpt.site

Deployment confirmed on 2026-11-02. The portfolio is currently owner-private.

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

Verified JavaScript syntax, all local HTTP assets, internal anchors, source PDF/portrait hashes, desktop and mobile layout (including 320px and 390px widths), mobile menu/Escape behavior, keyboard focus across breakpoints, and project disclosures. An independent reviewer checked the complete code and compared factual copy to the PDF. The private deployment completed successfully. See the approved design and implementation plan under `docs/superpowers/`.

## Source accuracy

The IBM AI Engineering certificate is in progress. Project performance metrics and production deployment claims are not asserted. The only project-specific source URL supplied by the resume is the staff badge detector; the other work has no invented links.
