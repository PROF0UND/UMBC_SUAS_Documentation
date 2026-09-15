import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const MAX_NAME_LENGTH = 80;
const MAX_BODY_LENGTH = 2000;
const DEFAULT_NAME = 'Anonymous';

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export const GET: APIRoute = async ({ url }) => {
  const pageId = url.searchParams.get('pageId');
  if (!pageId) return json({ error: 'pageId is required' }, 400);

  const { results } = await env.COMMENTS_DB.prepare(
    `SELECT id, author_name AS name, body, created_at AS createdAt
     FROM comments WHERE page_id = ?1 ORDER BY created_at ASC LIMIT 200`
  )
    .bind(pageId)
    .all();

  return json({ comments: results });
};

export const POST: APIRoute = async ({ request }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const { pageId, name, body, honeypot, turnstileToken } = (payload ?? {}) as Record<string, unknown>;

  // Real visitors never fill this hidden field in; bots that fill in every field do.
  // Report success without writing anything, so scrapers don't learn to skip it.
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return json({ ok: true });
  }

  if (typeof pageId !== 'string' || pageId.trim() === '') {
    return json({ error: 'pageId is required' }, 400);
  }
  if (typeof body !== 'string' || body.trim() === '') {
    return json({ error: 'Comment text is required' }, 400);
  }
  if (body.length > MAX_BODY_LENGTH) {
    return json({ error: `Comment must be ${MAX_BODY_LENGTH} characters or fewer` }, 400);
  }
  if (typeof name === 'string' && name.length > MAX_NAME_LENGTH) {
    return json({ error: `Name must be ${MAX_NAME_LENGTH} characters or fewer` }, 400);
  }
  if (typeof turnstileToken !== 'string' || turnstileToken === '') {
    return json({ error: 'Verification challenge is required' }, 400);
  }

  // Used only for this request's rate-limit check and the Turnstile verification call
  // below — never written to our database or logged anywhere.
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';

  const { success: withinLimit } = await env.COMMENT_RATE_LIMITER.limit({ key: ip });
  if (!withinLimit) {
    return json({ error: 'Too many comments — please wait a bit before posting again.' }, 429);
  }

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return json({ error: 'Verification failed — please try again.' }, 400);
  }

  const comment = {
    id: crypto.randomUUID(),
    name: (typeof name === 'string' && name.trim()) || DEFAULT_NAME,
    body: body.trim(),
    createdAt: Date.now(),
  };

  await env.COMMENTS_DB.prepare(
    'INSERT INTO comments (id, page_id, author_name, body, created_at) VALUES (?1, ?2, ?3, ?4, ?5)'
  )
    .bind(comment.id, pageId, comment.name, comment.body, comment.createdAt)
    .run();

  return json({ comment }, 201);
};

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const form = new FormData();
  form.append('secret', env.TURNSTILE_SECRET_KEY);
  form.append('response', token);
  if (ip !== 'unknown') form.append('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const outcome = (await response.json()) as { success: boolean };
  return outcome.success;
}
