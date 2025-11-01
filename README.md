
# La grande classe — Petite enfance (Next.js)

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
  
