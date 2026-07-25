// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// This project is built independently from the main site (../) and its output is
// merged into the main site's `dist/docs/` at deploy time — see ../README or ask
// before assuming a build/deploy pipeline exists for this yet.
// TODO: set `site` to the real deployed domain once known (needed for sitemap/canonical URLs).
export default defineConfig({
  base: '/docs',
  // Matches the main site's trailingSlash setting — this project's output is served from
  // the same origin once merged, so both must agree or internal links 404 in production.
  trailingSlash: 'never',
  integrations: [
    starlight({
      title: 'UMBC SUAS Docs',
      // TODO: add a `social` entry (e.g. GitHub) once the team repo/handles are settled.
      sidebar: [
        { label: 'Vehicles', items: [{ autogenerate: { directory: 'vehicles' } }] },
      ],
    }),
  ],
});
