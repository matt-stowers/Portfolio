# Decisions

## Portfolio Palette, Motion, And Contact

- Date: 2026-11-03
- Decision: Use navy `#112D4E`, blue `#3F72AF`, mist `#DBE2EF`, and soft white `#F9F7F7`, put direct contact links below the header, and use Framer Motion for section reveals and link feedback.
- Rationale: The palette gives the portfolio a clear identity, contact methods are immediately visible, and motion adds feedback while respecting reduced-motion preferences.
- Implementation: Use generous rounded corners on controls and image frames, keep all direct contact links in the top contact band, vary scroll reveals by section, and disable motion when reduced motion is requested.

## Portfolio Redesign

- Date: 2026-11-02
- Decision: Replace the AI product landing page with a personal portfolio focused on Matt's front-end work, Army leadership experience, skills, credentials, and direct contact details.
- Content source: Use the supplied resume and headshot. The resume documents one project and no project screenshots or destination URLs, so do not invent portfolio images, client claims, or performance metrics.
- Routing: Redirect the old product, documentation, pricing, and authentication routes to the portfolio homepage; list only the homepage in the sitemap.
- Motion: Use Framer Motion for viewport-triggered reveals and link interactions, and honor reduced-motion preferences.
