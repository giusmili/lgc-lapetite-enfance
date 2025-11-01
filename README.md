[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![CI](https://github.com/giusmili/lgc-lapetite-enfance/actions/workflows/ci.yml/badge.svg)](https://github.com/giusmili/lgc-lapetite-enfance/actions/workflows/ci.yml)

# La grande classe - Petite enfance (Next.js)

## Structure

```
├── favicon/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global (importe index.css + globals.css)
│   │   └── page.tsx            # Page d’accueil (rend <App />)
│   ├── components/             # UI & primitives
│   ├── constants/
│   ├── guidelines/
│   ├── styles/
│   │   └── globals.css         # Variables thèmes & styles globaux
│   ├── App.tsx                 # Composition de la page d’accueil
│   ├── Attributions.md
│   └── index.css               # CSS utilitaires 
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── build/                      # Ancien build Vite (non utilisé)
```

Notes migration:
- Vite retiré (fichiers supprimés: `index.html`, `vite.config.ts`, `src/main.tsx`).
- Next.js App Router utilisé sous `src/app/`.
- Alias `@/*` conservé (pointe sur `src/*`).
- Certains composants marqués `'use client'` (hooks côté client).

## Démarrage

- Installer: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Prod: `npm start`

Le dossier `build/` hérite de l’ancien setup Vite et n’est plus utilisé. Vous pouvez le supprimer en toute sécurité.

>[Server Deploy](https://lgc-lapetite-enfance.vercel.app/)
  
