# Winter Casa Resort & Cottages

A luxury forest-themed resort website built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Features

- ✨ Floating glass navbar with scroll hide/show
- 🎬 Cinematic hero section with slideshow and parallax effects
- 🏡 Luxury cottage showcase with hover animations
- 💬 Testimonials carousel with Swiper
- 📍 Contact section with embedded map
- 🎨 Premium forest theme with gold accents
- 🌫️ Glass-morphism effects throughout
- 📱 Fully responsive design

## Tech Stack

- **Next.js 16** - React framework
- **React 19.2** - UI library
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Swiper** - Carousel component

## Getting Started

1. **Move images to public folder:**
   - Copy `img1.jpg` through `img8.jpg` from the root directory to the `public/` folder
   - These images will be used for the hero slideshow and other sections

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Cottages.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── theme.ts
├── public/
│   └── assets/
├── site-config.json
└── package.json
```

## Configuration

All site content and branding can be customized through `site-config.json`. Images should be placed in the root directory or in `/public/assets/images/`.

## Color Palette

- **Forest Green**: #0E3B2F
- **Light Forest**: #1F5041
- **Gold**: #D4AF37
- **Off-white**: #F8F8F8

## License

Private project - All rights reserved

