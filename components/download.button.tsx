"use client";

import { useState } from "react";

const DOWNLOAD_URL = "#"; // placeholder — real .deb/.AppImage link goes here

export default function DownloadButton({
  className = "",
  children = "Download for Linux",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleDownload() {
    setSubmitting(true);
    try {
      const anonymousId = crypto.randomUUID();
      await fetch("/api/agree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anonymousId }),
      });
    } catch (err) {
      console.error("Failed to record agreement:", err);
      // fail open — don't block the download over a logging error
    } finally {
      setSubmitting(false);
      setOpen(false);
      setAgreed(false);
      // console.log("Trying to download")
      window.location.href = "/api/download";
      // window.location.href = DOWNLOAD_URL;
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-surface border border-border-color rounded-xl max-w-md w-full p-6 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              Before you download
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              ClipVault is open source — you can review the full source code
              before installing. It is provided as-is, with no warranty. By
              downloading, you agree to our{" "}

              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Terms
              </a>
              .
            </p>

            <label className="flex items-start gap-2.5 mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-border-color bg-background accent-accent"
              />
              <span className="text-sm text-foreground/90">
                I have read and agree to the Terms
              </span>
            </label>

            <div className="flex items-center gap-3">
              <button
                disabled={!agreed || submitting}
                onClick={handleDownload}
                className="flex-1 bg-accent text-white px-4 py-2.5 rounded-md text-sm font-medium transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90"
              >
                {submitting ? "Preparing…" : "Download"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-md text-sm font-medium border border-border-color hover:bg-white/[0.03] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
