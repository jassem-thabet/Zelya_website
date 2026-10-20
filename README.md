# Zelya — Site publicitaire

Site vitrine de la plateforme **Zelya** (gestion de groupements de taxis).

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript strict
- Tailwind CSS 4
- lucide-react (icônes)

Même base technique que le backoffice du monorepo `prodtaxikixi`.

## Démarrage

```bash
pnpm install
pnpm dev        # http://localhost:3002
```

## Scripts

| Commande         | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Serveur de développement (port 3002) |
| `pnpm build`     | Build de production                  |
| `pnpm start`     | Serveur de production (port 3002)    |
| `pnpm lint`      | ESLint                               |
| `pnpm typecheck` | Vérification TypeScript              |

## Structure

```text
src/
├── app/
│   ├── layout.tsx            # Layout global (header, footer, SEO)
│   ├── page.tsx              # Landing page
│   ├── contact/              # Page contact (coordonnées)
│   ├── mentions-legales/     # Pages légales
│   ├── confidentialite/
│   ├── conditions/
│   ├── icon.png              # Favicon
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── brand/                # Logo
│   ├── layout/               # Header, footer, gabarit légal
│   ├── sections/             # Sections de la landing
│   └── ui/                   # Primitives (bouton-lien, titres)
└── lib/utils.ts              # cn()
```

## Identité visuelle

Palette dérivée du logo Zelya (Z jaune/or sur fond noir) :

| Token          | Couleur   | Usage                       |
| -------------- | --------- | --------------------------- |
| `background`   | `#070604` | Fond principal              |
| `surface`      | `#0D0B06` | Surfaces de section         |
| `panel`        | `#12100A` | Panneaux et cartes          |
| `panel-soft`   | `#1A1710` | Hover / sélection           |
| `border`       | `#302B1E` | Bordures                    |
| `foreground`   | `#FAF8F1` | Texte principal             |
| `muted`        | `#A8A294` | Texte secondaire            |
| `zelya`        | `#FFC107` | Action principale, accents  |
| `zelya-soft`   | `#FFD54F` | Hover / focus               |
| `zelya-deep`   | `#F5A000` | Dégradés                    |

Typographie : Inter + Geist Mono.

## Assets

- `public/brand/zelya-logo-original.jpeg` — visuel source
- `public/brand/zelya-z.png` — monogramme Z (navbar)
- `public/brand/zelya-mark.png` — logo complet
- `public/brand/zelya-icon.png` — icône carrée
- `src/app/icon.png` — favicon

## À faire avant production

- Remplacer les coordonnées fictives (email, téléphone, adresse) dans le footer et `/contact`.
- Compléter les mentions légales (éditeur, hébergeur, SIREN).
- Remplacer les témoignages illustratifs par de vrais retours.
- Définir l'URL publique via `NEXT_PUBLIC_SITE_URL`.
