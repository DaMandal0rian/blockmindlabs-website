# BlockMind Labs Website

## Overview
This repository hosts the full-stack website for BlockMind Labs. It combines a React front-end and an Express backend. During development the client is served through Vite, and production builds are served as static assets alongside the API.

## Tech Stack
- **Frontend:** React 18, TypeScript, Wouter, React Query, Tailwind CSS
- **Backend:** Express, Vite (middleware in development), esbuild
- **Data:** Drizzle ORM with Zod validation, optional Strapi headless CMS
- **Build Tools:** Vite, esbuild, Tailwind CSS

## Project Structure
```
/
├── client/              # React front-end
│   ├── index.html
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       └── lib/
├── server/              # Express API server
│   ├── index.ts         # App entry and Vite integration
│   ├── routes.ts        # Contact & blog API endpoints
│   ├── storage.ts       # In-memory data store
│   └── vite.ts          # Dev server or static serving
├── shared/              # Shared types & validation schemas
│   └── schema.ts
├── strapi-cms/          # Optional Strapi CMS backend
├── package.json         # Scripts and dependencies
├── tailwind.config.ts   # Tailwind CSS config
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## How It Works
- **Server:** `server/index.ts` creates an Express app, registers API routes, and uses Vite in development or serves prebuilt assets in production.
- **Routes:** `server/routes.ts` exposes REST endpoints for contact form submissions and blog posts, validating input with Zod and storing data in a simple in-memory layer.
- **Shared Schema:** `shared/schema.ts` defines tables and validation for contacts, blog posts, pages, services, testimonials, and users.
- **Client:** The React app in `client/src` uses Wouter for routing, React Query for data fetching, and Tailwind for styling. A Strapi client and hooks integrate CMS content.
- **Build:** `npm run build` bundles the client with Vite and the server with esbuild into `dist/`. `npm start` runs the compiled server.
- **CMS:** Running the Strapi instance in `strapi-cms/backend` enables dynamic content management. See `STRAPI_INTEGRATION.md` for setup steps.

## Development
```bash
npm install        # Install dependencies
npm run dev        # Start Express + Vite in development mode
npm run build      # Build client and server
npm start          # Serve the production build
```

## License
MIT
