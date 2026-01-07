# TI-SMOL - Manutenzione Giardini & Pulizia

A modern, professional single-page website for TI-SMOL, a garden maintenance and building cleaning service based in Locarno, Ticino, Switzerland.

## Website Features

- **Multi-language Support**: Italian (primary), German, and English
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Framer Motion for smooth interactions
- **Comprehensive Sections**:
  - Hero with background image and call-to-action buttons
  - About section with company features and statistics
  - Services section showcasing all offered services
  - Gallery with image lightbox
  - Operating hours with today's highlight
  - Contact section with embedded Google Map
  - Footer with complete navigation

## Design System

- **Colors**: Forest green primary color (#5a8a6e) with gold accent
- **Fonts**: DM Serif Display (headings) + Inter (body text)
- **Custom CSS Variables**: Shadow utilities, responsive spacing
- **Theme**: Clean, professional aesthetic suited for garden maintenance & cleaning business

## Technology Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: React Context for language switching
- **Routing**: React Router with URL-based language detection
- **Build Tool**: Vite

## File Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with language switcher
│   ├── Hero.tsx            # Hero section with background image
│   ├── About.tsx           # About section with features
│   ├── Services.tsx        # Services showcase
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── Hours.tsx           # Operating hours with today highlight
│   ├── Contact.tsx         # Contact info with Google Map
│   ├── Footer.tsx          # Footer navigation
│   └── DisclaimerModal.tsx # Preview disclaimer modal
├── hooks/
│   └── useLanguage.tsx     # Language context and switcher
├── lib/
│   └── translations.ts     # Complete translations (IT, DE, EN)
├── pages/
│   └── Index.tsx           # Main single-page layout
└── index.css               # Design system with custom colors & fonts
```

## Language Support

- **Italian (it)**: Primary language at `/`
- **German (de)**: Secondary language at `/de`
- **English (en)**: Tertiary language at `/en`

Language can be switched via the globe icon in the header.

## Key Sections

1. **Header**: Fixed navigation with language switcher and call button
2. **Hero**: Full-screen background image with gradient overlay and CTAs
3. **About**: Company mission, statistics, and key features
4. **Services**: Grid of 10 professional services offered
5. **Gallery**: Single curated image with lightbox
6. **Hours**: Weekly operating schedule with today's highlight
7. **Contact**: Direct contact info, phone, email, and embedded map
8. **Footer**: Complete footer with links and business info

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact Information

- **Address**: Via Vallemaggia 9, 6600 Locarno, Switzerland
- **Phone**: +41 76 801 01 14
- **Email**: lakimitrev@gmail.com

## Disclaimer

This website includes a modal disclaimer informing visitors that:
- The site is a draft preview
- It is not indexed on Google
- It may contain errors or inaccuracies

The disclaimer appears once per session and can be dismissed.
