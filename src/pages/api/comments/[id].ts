import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

// Moderation escape hatch: no admin UI, just
//   curl -X DELETE -H "Authorization: Bearer <ADMIN_TOKEN>" https://<site>/api/comments/<id>
// Set ADMIN_TOKEN with `wrangler secret put ADMIN_TOKEN`. Until it's set, this 401s on every call.
export const DELETE: APIRoute = async ({ params, request }) => {
  const authHeader = request.headers.get('authorization');
  if (!env.ADMIN_TOKEN || authHeader !== `Bearer ${env.ADMIN_TOKEN}`) {
    return new Response(null, { status: 401 });
  }

  const { id } = params;
  if (!id) return new Response(null, { status: 400 });

  await env.COMMENTS_DB.prepare('DELETE FROM comments WHERE id = ?1').bind(id).run();
  return new Response(null, { status: 204 });
};
