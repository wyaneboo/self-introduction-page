# Boo Wyane — AI Engineer Portfolio

Status: approved by the user on 2026-11-02; implementation authorized.
Date: 2026-11-02

## Intent

Build a professional, project-led portfolio that helps Boo Wyane land an AI engineering job. A hiring manager should quickly understand his focus, examine concrete engineering work, see the foundations behind it, and reach his resume, GitHub, or email.

The user selected a project-led portfolio over a concise resume site and requested a written design rather than a browser mockup. The user supplied `Wyane Resume V4.pdf` and `me.jpeg` in the repository. The resume is the factual authority; no employment, results, awards, or project capabilities may be invented.

## Goals and boundaries

- Lead with applied AI agents and computer vision, backed by specific architecture and implementation details.
- Establish the connection between scientific training, data reliability, and practical AI engineering.
- Make the page useful to both a quick recruiter scan and a closer technical review.
- Provide a polished, responsive, accessible experience with working navigation, project details, resume download, and contact links.
- Avoid generic AI marketing, unsupported performance numbers, fake testimonials, fabricated demo links, and claims of prior employment as an AI Engineer.
- No accounts, chatbot, contact database, analytics service, blog system, or backend are needed.

## Approaches considered

1. **Project-led portfolio — selected by the user.** A distinctive landing page with substantial project stories, then skills, experience, education, and contact. More room to demonstrate engineering decisions; requires careful editing to stay easy to scan.
2. **Concise resume site.** Qualifications and employment first, with short project summaries. Simpler and quicker to scan, but offers less technical evidence for an AI engineering role.

The following implementation and styling choices are the builder's proposal, not preferences explicitly supplied by the user.

## Experience and visual direction

A single, editorial-style page with a warm ivory canvas, deep ink typography, forest-green accents, generous spacing, fine rules, and a dark technical panel within the main project story. Use large, confident headings and restrained monospace labels. Avoid a grid of interchangeable cards or decorative AI animations.

Use the supplied portrait as a purposeful visual anchor in the hero. Crop through CSS without altering the original file. Keep it secondary to the professional introduction. Typography should use a coherent serif display and sans-serif body pairing, with dependable fallbacks; exact fonts are the builder's call.

On wide screens, use asymmetric two-column compositions for the hero and featured work. On mobile, preserve a natural reading order and stack sections. Navigation remains easy to use without covering content. Hover and reveal effects should be subtle, with full reduced-motion support and visible keyboard focus.

### Page sequence

1. **Header:** Boo Wyane wordmark; links to Work, About, Experience, and Contact; resume action. Mobile navigation must work by keyboard and touch.
2. **Hero:** name, applied AI positioning, a proposed headline such as “Turning complex data into useful AI systems,” and supporting copy identifying an astrophysics graduate focused on Python agents and computer vision. Primary action: explore selected work. Secondary action: download resume. Show Petaling Jaya, Malaysia and interest in AI engineering opportunities without suggesting an existing AI Engineer job.
3. **Selected work:** two substantial featured projects plus a smaller scientific foundations row. Each project states the problem, what was built, implementation decisions, and tools. Native expandable details may reveal additional engineering context without requiring a separate page.
4. **About and toolkit:** connect astrophysics training to evidence, validation, and systematic problem solving. Group skills by Agents, Computer Vision, Data, and Engineering rather than assigning arbitrary proficiency percentages.
5. **Experience:** a concise chronology emphasizing operations analytics and migration validation; earlier teaching and ambassador work can be compact supporting entries.
6. **Education and learning:** Manchester degree and certificates, clearly distinguishing completed credentials from the IBM program in progress.
7. **Contact and footer:** direct email, GitHub, LinkedIn, and resume links. A mailto action opens the visitor's email client; no fake form submission or unavailable scheduling service.

## Resume-grounded content

### Identity

- Name: Boo Wyane.
- Resume headline: Applied AI Engineering | Python & LLM Agents.
- BSc Astrophysics graduate seeking junior AI engineering roles.
- Location: Petaling Jaya, Selangor, Malaysia.
- Email: `boowyane@gmail.com`.
- GitHub: `https://github.com/wyaneboo`.
- LinkedIn annotation: `http://www.linkedin.com/in/boo-wyane-8bba92239`.

### Featured projects

**Reasoning AI Agent — Open Agent Hackathon 2026**

Python pipelines integrate Malaysian weather forecasts and PM2.5/PM10 air quality data into Zetaris, with district-level SQL views for haze analysis. A four-agent architecture supports outdoor work planning using versioned evidence, persistent memory, and independent critic review. An explanatory pipeline diagram can show data ingestion, district views, agent reasoning, and review; label it as a system overview, not a live demo. Do not invent agent names, performance figures, a hackathon award, or a project-specific repository URL.

**Staff Badge Detection and Tracking**

A modular Python video pipeline uses OpenCV, Roboflow, and ByteTrack to detect staff badges and track people across frames. Badge-to-person association uses overlap and confidence thresholds. Outputs include annotated video and frame-level CSV/JSON. Source link: `https://github.com/wyaneboo/Tag-Detector`. Do not fabricate model accuracy or production use.

**Scientific foundations**

- Particle detector simulation in C++: abstract classes and polymorphism model particles, trackers, calorimeters, and muon detectors, with nonnegative energy validation and event energy checks.
- Scientific data analysis: Higgs boson decay in CERN ATLAS data using ROOT, and stellar signals through astronomical data analysis at Jodrell Bank Observatory.

### Skills to prioritize

- Agents: structured LLM outputs, Pydantic, planning and evaluation, persistent memory, embeddings, hybrid retrieval, multi-agent architecture, evidence validation.
- Vision: OpenCV, Roboflow, ByteTrack.
- Data: Python, SQL, Pandas, NumPy, SQLite, REST API ingestion, Zetaris, PostgreSQL configuration.
- Engineering: pytest, Git, Docker and Docker Compose, transactions, idempotency, provenance, rollback, UAT; C++ as a supporting language.
- Supporting analytics tools may appear with relevant experience: Looker, Notion, BigQuery, Tableau.

### Experience

- Great Eastern — Agency Operations Analyst, Jul 2025–Jun 2026: Looker and Notion process improvements and agency operations analysis. The RM2M ANP figure is an annual sales target, not achieved revenue; omit it from headline metrics.
- Philip Morris International — Data Migration & Automation (UAT), Feb–Mar 2025: Malaysian name-parsing edge cases, migration testing, and technical/business coordination for readiness.
- Pearson — Student Ambassador, Jun 2022–Jun 2023: student market analysis, outreach, and engagement.
- Private Academic Tutor, Aug 2022–Jul 2023: tailored physics learning plans, helping students progress from failing to passing grades.

### Education and certificates

- University of Manchester — BSc Astrophysics, 2021–2024, Upper Second-Class Honours (2:1).
- IBM AI Engineering Professional Certificate, Coursera — in progress; completed coursework includes Machine Learning with Python and Introduction to Deep Learning & Neural Networks with Keras.
- Google AI Professional Certificate, Coursera — Aug 2026.
- Google Data Analytics Professional Certificate, Coursera — Jan 2026.

## Technical approach and delivery

The repository currently contains Git metadata, `.gitattributes`, the resume, and the portrait. There is no application stack to preserve. Use buildless semantic HTML, CSS, and JavaScript in a new `site/` subdirectory, with deployable files in `site/dist/`. Keep source assets intact and copy only the portrait and resume needed by the site. Use relative asset URLs and no application framework or remote API dependency.

Provide descriptive page metadata, a favicon, correct heading hierarchy, accessible link names, image dimensions and alt text, strong contrast, a skip link, keyboard operation, and reduced-motion behavior. Keep the page functional without JavaScript where practical. Any project detail control must correctly convey its expanded state.

Use the Sites workflow for a private hosted review link after implementation and validation, subject to available tooling. Preserve the user's existing GitHub remote and repository assets. A public audience change is separate from this proposed private review delivery. If hosting cannot complete, retain the working local site and report the specific limitation.

The downloadable resume is the supplied PDF, without rewriting qualifications. Display email and professional profile links in the page; do not repeat the phone number in page copy. Do not link to nonexistent case-study pages, demos, or source repositories.

## Acceptance checks

- All personal, career, education, project, and certificate statements match the supplied resume or are clearly phrased as restrained synthesis.
- Desktop and mobile layouts have no horizontal overflow, overlapping navigation, clipped text, or distorted portrait.
- All section links, project detail controls, external profile links, mailto action, and PDF download work.
- Keyboard focus and mobile navigation behave correctly; reduced motion is respected.
- Browser console has no application errors; site assets resolve from the intended hosted base path.
- Deployment is verified through the hosting result when available. Report any browser or deployment verification that cannot be completed.

## Choices left to the builder

Exact font selection, spacing, icon treatment, responsive breakpoints, subtle interaction details, wording within the factual constraints, and whether the shorter scientific work is rendered as one or two entries. No further product functionality is implied.
