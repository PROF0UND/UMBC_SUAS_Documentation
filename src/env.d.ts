// Secrets set with `wrangler secret put` (production) or `.dev.vars` (local) — not declared
// in wrangler.jsonc, so `wrangler types` can't see them. Declared here instead.
interface Env {
  TURNSTILE_SECRET_KEY: string;
  ADMIN_TOKEN: string;
}
