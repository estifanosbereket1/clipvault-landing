import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

export const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") global.pgPool = pool;

export async function ensureAgreementsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS agreements (
      id SERIAL PRIMARY KEY,
      agreed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      anonymous_id TEXT NOT NULL
    );
  `);
}
