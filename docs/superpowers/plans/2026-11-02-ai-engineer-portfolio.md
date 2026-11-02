# AI Engineer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Build and deliver Boo Wyane's approved professional, project-led AI engineering portfolio.

**Architecture:** Buildless HTML, CSS, and small progressive JavaScript enhancements. All visitor content and assets live in `site/dist/`; a local static server and Sites can serve the same files.

**Tech Stack:** Semantic HTML5, CSS, JavaScript; Python standard-library HTTP server for local preview.

**Spec:** `docs/superpowers/specs/2026-11-02-ai-engineer-portfolio-design.md`

## Global Constraints

- The resume is the factual authority; no employment, results, awards, or project capabilities may be invented.
- Use buildless semantic HTML, CSS, and JavaScript in a new `site/` subdirectory, with deployable files in `site/dist/`.
- No accounts, chatbot, contact database, analytics service, blog system, or backend are needed.
- The downloadable resume is the supplied PDF, without rewriting qualifications.
- Respect reduced motion, keyboard navigation, mobile layouts, and no-JavaScript access to content.

## Review Focus

- A narrow viewport must retain readable copy and every navigation/contact action without horizontal overflow.
- Keyboard users must reach navigation and project details with visible focus and accurate state.
- JavaScript disabled or unavailable must leave all core content and links accessible.
- Resume and image URLs must resolve when served from the deployment root.
- Copy must keep IBM certification in progress and RM2M as a target, never an achieved result.

## Task 1: Implement the complete portfolio

**Files:** Create `site/dist/index.html`, `site/dist/styles.css`, `site/dist/script.js`, `site/dist/favicon.svg`, `site/dist/assets/portrait.jpeg`, `site/dist/assets/boo-wyane-resume.pdf`, and `README.md`.

**Interfaces:** Navigation targets `#work`, `#about`, `#experience`, `#contact`. All assets use relative URLs. Native `details/summary` provides project expansion. JavaScript only enhances a mobile navigation toggle using `aria-expanded` and `hidden` or progressive CSS.

- [x] Confirm no application currently exists and establish a feature branch.
- [x] Copy the supplied portrait and PDF unchanged to the assets folder.
- [x] Write the complete factual semantic HTML with the approved section sequence and real profile/project links.
- [x] Add editorial responsive styling, a distinctive system overview, focus states, and reduced-motion rules.
- [x] Implement mobile menu open/close, Escape, link selection, and resize behavior without blocking the no-JS navigation.
- [x] Verify JavaScript syntax with `node --check site/dist/script.js` and inspect document links/assets using a standard-library parser.
- [x] Commit the complete implementation.

## Task 2: Validate the visitor experience and independently review

**Files:** Verify the Task 1 files; fix only observed defects. Record outcomes in this plan's progress ledger.

**Interfaces:** Serve `site/dist/` on loopback; use the same built files that will be deployed.

- [x] Start a static HTTP server and confirm HTTP 200 for page, CSS, JS, portrait, and PDF.
- [x] Use browser inspection for desktop/mobile layout, project details, anchors, mobile menu keyboard behavior, and contact/download URLs.
- [x] Check browser errors and document overflow; use an independent reviewer for factual accuracy, accessibility, and code quality.
- [x] Fix observed material issues and repeat affected checks.
- [x] Commit verified changes and record verification evidence.

## Task 3: Package and deliver

**Files:** Create the Sites manifest in `site/.openai/hosting.json` if registration succeeds; preserve returned IDs. Update README with run instructions and delivery status.

**Interfaces:** Sites source helper accepts the returned credential through stdin and emits verified source commit/archive; private deploy consumes those exact values.

- [x] Register once, persist returned Site identity, and keep credentials out of files and output.
- [x] Package and push exact verified source through the supported helper, preserving the existing user GitHub remote.
- [x] Deploy privately and verify the terminal result; if infrastructure blocks publishing, report that limitation and deliver the verified local site.
- [x] Open the resulting site for the user and report the result, tests, and any material limitations.
