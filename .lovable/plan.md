

# PulseFit — Dark-Themed Fitness Website

## Overview
A single-page, dark-themed fitness website with 10 sections, built with React, Tailwind CSS, and JavaScript only. Electric lime (#c8f000) accent, Bebas Neue + Inter fonts, scroll animations, and full mobile responsiveness.

## Sections to Build
1. **Navbar** — Fixed, transparent → dark on scroll, hamburger on mobile
2. **Hero** — Full-screen with gym background, overlay, heading "Train Every Day", two CTAs
3. **About / Empowering** — Two-column text + image split
4. **Services** — Expandable accordion rows (Personal/Group/Corporate Training)
5. **Why Choose Us** — Heading left + 2x3 feature card grid right with Lucide icons
6. **Tagline Banner** — Full-width background image with centered bold text
7. **Trainers** — 3-column grid with trainer photos, names, dot navigation
8. **Pricing** — Monthly/Annual toggle, 3 tier cards (Basic/Pro/Elite), Pro highlighted
9. **Testimonials** — Before/after photos + quote cards, alternating layout
10. **Footer** — Logo, nav links, social icons, newsletter subscription

## Design System
- Colors: #0a0a0a bg, #c8f000 accent, white/gray text
- Fonts: Bebas Neue (headings), Inter (body) via Google Fonts
- Cards: #1a1a1a bg, #222 borders, rounded-xl

## Technical Details
- Custom `useScrollReveal` hook using IntersectionObserver for fade-in animations
- Navbar scroll detection via useEffect + scrollY
- Pricing toggle with useState (monthly/annual)
- Trainer carousel with dot navigation
- Mobile hamburger menu
- Smooth scroll behavior
- Real Unsplash fitness images
- Lucide React icons
- JavaScript only — no TypeScript, no UI libraries

