"use client";

import { useState } from "react";

const INSTALL_COMMAND =
  "curl -fsSL https://raw.githubusercontent.com/estifanosbereket1/clipvault/main/bootstrap.sh | bash";

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
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleAgree() {
    setSubmitting(true);

    try {
      const anonymousId = crypto.randomUUID();

      await fetch("/api/agree", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ anonymousId }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setRevealed(true);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleClose() {
    setOpen(false);
    setAgreed(false);
    setSubmitting(false);
    setRevealed(false);
    setCopied(false);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-border-color bg-surface shadow-2xl"
          >
            {!revealed ? (
              <>
                <div className="border-b border-border-color px-7 py-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Before you install
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    ClipVault is completely open source. You can inspect the
                    code before running anything on your machine.
                    <br />
                    <br />
                    By continuing, you acknowledge that the software is provided
                    <span className="font-medium text-foreground">
                      {" "}
                      as-is
                    </span>{" "}
                    without warranty and agree to our{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent hover:underline"
                    >
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>

                <div className="px-7 py-6">
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border-color p-4 hover:bg-white/[0.02] transition-colors">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-accent"
                    />

                    <span className="text-sm text-foreground">
                      I have read the Terms of Service and understand that I am
                      responsible for reviewing commands before running them.
                    </span>
                  </label>

                  <div className="mt-6 flex gap-3">
                    <button
                      disabled={!agreed || submitting}
                      onClick={handleAgree}
                      className="flex-1 rounded-lg bg-accent px-5 py-3 font-medium text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitting ? "One moment..." : "Continue"}
                    </button>

                    <button
                      onClick={handleClose}
                      className="rounded-lg border border-border-color px-5 py-3 font-medium transition hover:bg-white/[0.03]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-b border-border-color px-7 py-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Install ClipVault
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Copy the command below and paste it into your terminal.
                    <br />
                    The installer downloads the latest version and walks you
                    through each installation step.
                  </p>
                </div>

                <div className="px-7 py-6">
                  {/* Terminal */}
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-inner">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />

                        <span className="ml-2 text-xs font-medium text-zinc-400">
                          Terminal
                        </span>
                      </div>

                      <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                          copied
                            ? "bg-green-500/15 text-green-400"
                            : "bg-white/5 text-zinc-300 hover:bg-white/10"
                        }`}
                      >
                        {copied ? (
                          <>
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.415 0l-4-4a1 1 0 111.414-1.41L8 12.586l7.296-7.296a1 1 0 011.408 0z"
                              />
                            </svg>
                            Copied
                          </>
                        ) : (
                          <>
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                              />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                            </svg>
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    {/* Command */}
                    <div className="overflow-x-auto p-5">
                      <code className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-zinc-100">
                        <span className="select-none text-green-400">$</span>

                        <span>{INSTALL_COMMAND}</span>
                      </code>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                    <div className="flex gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>

                      <div>
                        <p className="text-sm font-medium text-blue-300">
                          Security Tip
                        </p>

                        <p className="mt-1 text-sm leading-6 text-blue-200/80">
                          Always review commands before executing them. Since
                          ClipVault is open source, you can inspect the install
                          script and source code on GitHub before running it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-6 w-full rounded-lg border border-border-color py-3 font-medium transition hover:bg-white/[0.03]"
                  >
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
