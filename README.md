# geekson.be

Website of Geekson Software. Next.js (App Router) exported as a static site and hosted on OVH.

## Development

```bash
npm install
npm run dev      # http://localhost:3000/fr/
npm run build    # static export in out/
npm run lint
```

## Content & languages

- All texts live in `app/_lib/dictionaries/<lang>.json` (`fr` is the reference).
- A language is published as soon as its dictionary is registered in `app/_lib/i18n.ts`.
- `/` is redirected to `/fr/`, `/nl/` or `/en/` by `public/.htaccess`, based on the browser language.

## Theme

Light and dark colors are CSS variables in `app/globals.css`. The theme follows the OS preference until the visitor
picks one with the header button (saved in `localStorage`).

## Deployment

Every push on `main` builds the site and uploads `out/` to the OVH hosting (`www/`) over SFTP with `lftp`
(`.github/workflows/deploy.yml`). Running the workflow manually from another branch only performs a dry-run.
Required repository secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
