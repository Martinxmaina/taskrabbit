# Taskrabbit Clone

A modern, responsive clone of Taskrabbit built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** with hero section, service categories, and popular projects
- 🔍 **Service Listing** with search and category filtering
- 📋 **Service Detail Pages** with booking interface
- ⭐ **Testimonials** section showcasing customer reviews
- 🎨 **Modern UI** with smooth animations and transitions
- 📱 **Fully Responsive** design for all devices
- 🚀 **Fast Performance** with Next.js App Router

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd taskrabbit-clone
```

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
taskrabbit-clone/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ...
│   ├── data/                # Data files
│   │   └── services.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── services/            # Service pages
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── public/                  # Static assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Homepage
- Hero section with service category selection
- Statistics section showing platform metrics
- Popular projects grid
- Customer testimonials
- Trust indicators (Happiness Pledge, Vetted Taskers, Support)
- "How it works" section
- All services quick links

### Services Page
- Search functionality
- Category filtering
- Responsive grid layout
- Service cards with pricing

### Service Detail Page
- Service information
- Booking form with date/time selection
- Pricing display

## Color Scheme

- Primary: `#00A86B` (Taskrabbit green)
- Background: White/Gray-50
- Text: Gray-900/Gray-600

## Future Enhancements

- [ ] Tasker selection and profile pages
- [ ] User authentication
- [ ] Booking confirmation flow
- [ ] Payment integration
- [ ] Real-time chat
- [ ] Review and rating system
- [ ] Map integration for location-based services

## License

This is a clone project for educational purposes.
