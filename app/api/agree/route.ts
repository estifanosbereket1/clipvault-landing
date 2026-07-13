import { NextResponse } from "next/server";
import { pool, ensureAgreementsTable } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { anonymousId } = await req.json();

    if (!anonymousId || typeof anonymousId !== "string") {
      return NextResponse.json({ error: "Missing anonymousId" }, { status: 400 });
    }

    await ensureAgreementsTable();
    await pool.query(
      "INSERT INTO agreements (anonymous_id) VALUES ($1)",
      [anonymousId]
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("agree route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
