-- Comments are intentionally minimal: a display name (not an account), the comment
-- text, which page it's on, and when it was posted. No IP addresses, emails, or any
-- other visitor data are ever written to this table.
CREATE TABLE comments (
  id TEXT PRIMARY KEY,
  page_id TEXT NOT NULL,
  author_name TEXT NOT NULL DEFAULT 'Anonymous',
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX idx_comments_page_id ON comments (page_id, created_at);
