# Beaded Bags Course - Online Learning Platform

A modern, responsive web application for learning how to create and sell beaded bags. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Comprehensive Course Content** - 23+ modules covering beaded bag creation from basics to advanced techniques
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Fast Performance** - Vite-powered development and production builds
- **SEO Optimized** - Meta tags and structured data for better search visibility

## Tech Stack

- **Frontend Framework:** React 18.3
- **Language:** TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui + Radix UI
- **State Management:** TanStack React Query
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs on `http://localhost:8080` with hot module replacement (HMR) enabled.

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

The optimized build output is generated in the `dist/` directory.

## Deployment

This project is deployed on Netlify. The build configuration is managed through `netlify.toml`.

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
3. Deploy

### Custom Domain Setup

To connect a custom domain from Cloudflare:

1. Add the domain in Netlify's Domain Management
2. Create a CNAME record in Cloudflare pointing to your Netlify domain
3. Ensure DNS only mode (no proxy) in Cloudflare for SSL to work properly

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── assets/        # Images and static files
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode

## License

This project is proprietary and created by Isabella Toscano.

## Support

For questions or issues, please contact the course creator.
