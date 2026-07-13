import { NextResponse } from "next/server";

const GITHUB_REPO = "estifanosbereket1/clipvault";

export async function GET() {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
    { next: { revalidate: 300 } } // cache for 5 minutes, avoid hammering GitHub's API
  );

  if (!res.ok) {
    return NextResponse.redirect(
      `https://github.com/${GITHUB_REPO}/releases/latest`
    );
  }

  const data = await res.json();
  const zipUrl: string | undefined = data.zipball_url;

  if (!zipUrl) {
    return NextResponse.redirect(
      `https://github.com/${GITHUB_REPO}/releases/latest`
    );
  }

  return NextResponse.redirect(zipUrl);
}
