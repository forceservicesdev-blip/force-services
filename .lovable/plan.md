# Cleaning Services Website Rebuild Plan

## Goal
Transform the remixed plumbing template into a modern, premium Irish cleaning-services lead-generation site focused on trust, professionalism, and conversions.

## Design System
- **Palette**: white backgrounds, soft blue accents, dark navy primary, subtle green highlights.
- **Typography**: keep Clash Grotesk but use it cleanly; ensure strong hierarchy and readability.
- **Style**: ample whitespace, rounded cards, subtle shadows, smooth scroll, restrained animations.
- **Tokens**: update `index.css` and `tailwind.config.ts` to new cleaning brand colors; avoid hardcoded colors in components.

## Site Structure & Navigation
- **Nav**: Home, Services, About Us, Reviews, FAQ, Contact + prominent "Get a Free Quote" button.
- **Mobile**: hamburger menu with sticky WhatsApp and Get a Quote CTAs.
- **Pages**:
  - `/` — Home with all conversion sections
  - `/services` — Cleaning services grid
  - `/about` — About the company
  - `/contact` — Contact form + details
  - `/quote` — Detailed cleaning quote form
  - `/reviews` — Testimonials page
  - `/faq` — FAQ page
  - `/privacy-policy` — keep
  - `/dashboard` — admin/user dashboards relabeled for cleaning leads

## Home Page Sections
1. **Hero**: "Professional Cleaning Services You Can Trust", supporting text for homes/businesses across [SERVICE AREA], Get a Free Quote + WhatsApp Us, trust badges.
2. **Services**: cards for Regular House Cleaning, Deep Cleaning, End of Tenancy, Office/Commercial, Move-In/Move-Out, Custom Cleaning.
3. **Why Choose Us**: Trusted Professionals, Reliable & Punctual, Fully Insured, Attention to Detail, Flexible Scheduling, Competitive Pricing.
4. **Before & After**: interactive before/after slider for kitchen, bathroom, living room, office.
5. **About Us**: local Irish cleaning business story + team image + CTA.
6. **Reviews**: 4–6 realistic testimonial cards.
7. **Booking Process**: 3 steps — Request a Quote, Get Your Price, Enjoy a Spotless Space.
8. **Quote Form**: prominent cleaning quote form.
9. **WhatsApp CTA**: floating button + section CTA.
10. **Service Areas**: grid of towns/areas served.
11. **FAQ**: accordion with 9 cleaning-related questions.
12. **Final CTA**: "A Cleaner Home Starts Here" with quote + WhatsApp buttons.
13. **Footer**: logo, description, services, service areas, contact, hours, socials, legal links.

## Quote Form Fields
Full Name, Phone, Email, Service Required, Property Type, Preferred Date, Preferred Time, Frequency, Bedrooms, Bathrooms, Message.

## WhatsApp Integration
- Floating bottom-right WhatsApp button.
- Pre-filled message: "Hi, I'd like to get a quote for your cleaning services."
- WhatsApp CTAs in hero and final CTA.

## SEO
- Semantic HTML, H1/H2/H3 hierarchy.
- Local SEO keywords with [SERVICE AREA] placeholders.
- Updated `<title>` and `<meta name="description">`.
- FAQ structured data (JSON-LD).
- Descriptive alt text on all images.

## Images
- Use generated or placeholder images for professional cleaners, clean homes, kitchens, bathrooms, offices, before/after scenes, team.

## Dashboard
- Relabel dashboard menu and overview cards for cleaning services.
- Keep auth and data tables; adapt quote/service-inquiry labels.

## Execution
1. Update design tokens and `index.html` metadata.
2. Rebuild shared components (Header, Footer, Logo).
3. Create new section components.
4. Update page routes and content.
5. Add WhatsApp integration and quote form.
6. Add FAQ structured data and SEO tags.
7. Update dashboard labels.
8. Build and verify.
