# UMBC SUAS Documentation

Documentation site for UMBC's Student Unmanned Aerial Systems (SUAS) vehicles, built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), deployed to Cloudflare Workers.

Live site: https://umbc-suas-documentation.1872star.workers.dev/

## Running locally

```
npm install
npm run dev -- --background
```

Then open **http://localhost:4321** in your browser. The dev server hot-reloads, so edits to any `.md` file show up immediately — no restart needed.

To stop it:

```
npx astro dev stop
```

Other useful commands while it's running in the background:

```
npx astro dev status   # check if it's running
npx astro dev logs     # view server output
```

## Where the documentation lives

All actual documentation content is Markdown files under `src/content/docs/vehicles/`:

```
src/content/docs/
├── index.md                     # site homepage
└── vehicles/
    ├── Skypiea/
    │   ├── index.md             # vehicle overview page
    │   ├── Avionics/            # flight controller, GPS, RC, telemetry, sensors...
    │   ├── Manufacturing/       # fuselage, wing, tail, landing gear, ground steering
    │   └── Flight Safety/       # safety checklist, arming switch, center of gravity
    ├── Antenna Tracker/
    └── Standard Testing Drone/
```

- Each `.md` file becomes a page. The URL is based on its folder/file path (lowercased), e.g. `Skypiea/Avionics/flight-controller.md` → `/vehicles/skypiea/avionics/flight-controller`.
- Sidebar order/labels are set per-page in that file's frontmatter (`sidebar.order`, `sidebar.label`).
- Images referenced with relative paths (e.g. `![alt](assets/photo.png)`) live in an `assets/` folder next to the page and get optimized automatically by Astro.
- Videos and PDFs are **not** processed by Astro's image pipeline — they go in `public/` (e.g. `public/pdfs/`, `public/videos/`) and are referenced with an absolute path from the site root (e.g. `/pdfs/file.pdf`, `/videos/file.mp4`), not a relative one.

## Adding a new page

1. Create a new `.md` file under the relevant vehicle folder in `src/content/docs/vehicles/`.
2. Add frontmatter with at least `title` and `description`, plus a `sidebar.order`/`sidebar.label` if you want to control its position.
3. Run the dev server and check the page renders and the sidebar link works before pushing.

## Deploying

Pushing to the main branch triggers an automatic build + deploy via Cloudflare (Workers, using `wrangler.jsonc` + static assets from `./dist/`). There's no manual deploy step — just commit and push.

If you need to test the production build output locally first:

```
npm run build
npm run preview
```

## Commands reference

| Command                    | Action                                                  |
| :-------------------------- | :------------------------------------------------------ |
| `npm install`               | Install dependencies                                     |
| `npm run dev -- --background` | Start local dev server at `localhost:4321` in the background |
| `npx astro dev stop`        | Stop the background dev server                           |
| `npx astro dev status`      | Check whether the dev server is running                  |
| `npx astro dev logs`        | View dev server logs                                      |
| `npm run build`             | Build the production site to `./dist/`                   |
| `npm run preview`           | Build, then preview the production build via Wrangler    |
| `npm run astro -- --help`   | See all Astro CLI options                                 |

## Learn more

[Starlight docs](https://starlight.astro.build/) · [Astro docs](https://docs.astro.build)
