# Decisions

## Purple Palette

- Date: 2026-11-02
- Decision: Use a purple-led color palette for future site changes.
- Rationale: This matches the existing purple and lavender theme tokens in `src/styles/tailwind.css` and establishes a consistent visual direction.
- Implementation: Prefer the existing purple tokens for accents, interactive states, highlights, and supporting surfaces, balanced with the site's neutral colors.

## Portfolio Redesign

- Date: 2026-11-02
- Decision: Replace the AI product landing page with a personal portfolio focused on Matt's front-end work, Army leadership experience, skills, credentials, and direct contact details.
- Content source: Use the supplied resume and headshot. The resume documents one project and no project screenshots or destination URLs, so do not invent portfolio images, client claims, or performance metrics.
- Routing: Redirect the old product, documentation, pricing, and authentication routes to the portfolio homepage; list only the homepage in the sitemap.
- Motion: Keep the entrance animation limited to the hero, use CSS for simple transitions, and honor reduced-motion preferences.
