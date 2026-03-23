# Frontend — Next.js on Vercel

This folder contains the Next.js frontend for the Online Quiz System.

## Philosophy

- **HTML/CSS first** — Custom HTML and CSS used wherever possible
- Minimal reliance on framework-specific CSS utilities
- Clean, semantic markup

## Structure

```
frontend/
├── pages/           # Next.js pages
├── public/          # Static assets
├── styles/          # CSS files
├── components/      # Reusable UI components
└── README.md
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deployment (Vercel)

1. Push code to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Set environment variables (API URL, etc.)
4. Deploy
