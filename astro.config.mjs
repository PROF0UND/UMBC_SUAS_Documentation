// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from '@astrojs/cloudflare';

// This project is built independently from the main site (../) and its output is
// merged into the main site's `dist/docs/` at deploy time — see ../README or ask
// before assuming a build/deploy pipeline exists for this yet.
// TODO: set `site` to the real deployed domain once known (needed for sitemap/canonical URLs).
export default defineConfig({
  // Matches the main site's trailingSlash setting — this project's output is served from
  // the same origin once merged, so both must agree or internal links 404 in production.
  trailingSlash: 'never',

  // Pages stay statically prerendered by default (output: 'static'); only the comments
  // API routes opt out via `export const prerender = false` and run on-demand in the Worker.
  // `imageService: 'compile'` keeps images optimized at build time (as before) instead of
  // pulling in the Cloudflare Images product/binding, which this site doesn't otherwise use.
  adapter: cloudflare({ imageService: 'compile' }),
  // No page on this site uses Astro's session API — don't provision a KV namespace for it.
  session: false,

  integrations: [
    starlight({
      title: 'UMBC SUAS Docs',
      // TODO: add a `social` entry (e.g. GitHub) once the team repo/handles are settled.
      components: {
        // Adds a Cusdis comment widget below the page footer — see src/components/Comments.astro.
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
        { label: 'Vehicles', items: [{ autogenerate: { directory: 'vehicles' } }] },
        { label: 'Flight Logs', items: [{ autogenerate: { directory: 'Flight Logs' } }] },
      ],
    }),
  ],
});