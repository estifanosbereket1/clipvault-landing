import DownloadButton from "@/components/download.button";

import {
  QrCode,
  Radio,
  Search,
  Flame,
  Palette,
  ShieldCheck,
  Minus,
  Square,
  X,
  Star,
  Copy,
  Trash2,
  History,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: QrCode,
      title: "QR-to-phone copy",
      description:
        "Scan a code to send any entry straight to your phone's clipboard, over local HTTPS — no app, no account.",
    },
    {
      icon: Radio,
      title: "LAN peer sync",
      description:
        "Your history mirrors automatically across every device on your network — desktop, laptop, whatever's running ClipVault."
    },
    {
      icon: Search,
      title: "Search, pin, diff",
      description:
        "Fuzzy search your full history, pin what you reuse often, and line-diff any two entries side by side.",
    },
    {
      icon: Flame,
      title: "Burn-after-copy",
      description:
        "Mark a value as one-time. ClipVault wipes it from the clipboard automatically right after you paste it.",
    },
    {
      icon: Palette,
      title: "Fully themeable",
      description:
        "Multiple dark and light palettes included, with automatic matching to your system theme.",
      image: "/screenshots/theming.png",
    },
    {
      icon: History,
      title: "Visual history timeline",
      description:
        "Scroll back through everything you've copied with a visual playback of your clipboard over time.",
    },
  ];
  return (
    <main className="flex-1 relative noise-overlay">
      {/* Nav */}
      <nav className="border-b border-border-color relative z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md  flex items-center justify-center">
              {/*<span className="font-display text-xs text-accent">CV</span>*/}
              <img src="/app-logo.png" alt="" className="w-full block" />

            </div>
            <span className="font-display text-sm font-medium">ClipVault</span>
            <span className="ml-1 text-[10px] font-mono text-muted border border-border-color rounded px-1.5 py-0.5">
              v0.1.0
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a
              href="https://github.com/estifanosbereket1/clipvault"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative hero-glow">
         <div className="bg-grid-layer" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 border border-border-color rounded-full pl-1 pr-3 py-1 bg-surface/60">
              <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted tracking-wide">
                open source · linux · system tray
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.05] tracking-tight">
              <span className="block text-4xl md:text-[3.4rem] text-foreground">
                Your clipboard,
              </span>
              <span className="block text-4xl md:text-[3.4rem] text-foreground">
                everywhere.
              </span>
              <span className="block text-2xl md:text-3xl text-muted font-medium tracking-normal mt-1">
                Searchable. Synced. Yours.
              </span>
            </h1>

            <p className="mt-6 text-muted text-lg leading-relaxed max-w-md">
              ClipVault keeps your clipboard history organized, searchable, and
              reachable from your phone , with QR handoff, diffing, and
              burn-after-copy built in.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <DownloadButton className="relative bg-accent text-white px-5 py-2.5 rounded-md text-sm font-medium shadow-[0_0_0_1px_rgba(91,140,255,0.4),0_8px_24px_-8px_rgba(91,140,255,0.6)] hover:bg-accent/90 hover:shadow-[0_0_0_1px_rgba(91,140,255,0.5),0_12px_28px_-8px_rgba(91,140,255,0.75)] transition-all" />
              {/*<button className="relative bg-accent text-white px-5 py-2.5 rounded-md text-sm font-medium shadow-[0_0_0_1px_rgba(91,140,255,0.4),0_8px_24px_-8px_rgba(91,140,255,0.6)] hover:bg-accent/90 hover:shadow-[0_0_0_1px_rgba(91,140,255,0.5),0_12px_28px_-8px_rgba(91,140,255,0.75)] transition-all">
                Download for Linux
              </button>*/}
              <a
                href="https://github.com/estifanosbereket1/clipvault"
                className="border border-border-color px-5 py-2.5 rounded-md text-sm font-medium hover:border-muted hover:bg-white/[0.03] transition-colors"
              >
                View on GitHub
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-muted">
              <span>Debian</span>
              <span className="w-1 h-1 rounded-full bg-border-color" />
              <span>Ubuntu</span>
              <span className="w-1 h-1 rounded-full bg-border-color" />
              <span>Fedora</span>
              <span className="w-1 h-1 rounded-full bg-border-color" />
              <span>Arch</span>
            </div>
          </div>

          {/* Mock app UI as hero visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl" />
            <div className="relative bg-surface border border-border-color rounded-xl overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_24px_60px_-16px_rgba(0,0,0,0.7)]">
              {/* Title bar */}
              <div className="relative flex items-center justify-center px-4 py-2.5 border-b border-border-color bg-white/[0.015]">
                <span className="text-xs font-mono text-foreground/80">
                  ClipVault History
                </span>
                <div className="absolute right-3 flex items-center gap-3 text-muted/50">
                  <Minus className="w-3 h-3" strokeWidth={2} />
                  <Square className="w-2.5 h-2.5" strokeWidth={2} />
                  <X className="w-3 h-3" strokeWidth={2} />
                </div>
              </div>

              {/* Sub-header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border-color">
                <span className="text-xs text-muted font-mono">Clipboard History</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-muted border border-border-color rounded px-2 py-1">
                    Compare Mode
                  </span>
                  <span className="text-[10px] font-mono text-muted border border-border-color rounded px-2 py-1">
                    Refresh
                  </span>
                </div>
              </div>

              {/* Search */}
              <div className="px-3 pt-3">
                <div className="flex items-center gap-2 border border-accent/40 rounded-lg px-3 py-2 bg-background/40">
                  <Search className="w-3.5 h-3.5 text-muted" strokeWidth={2} />
                  <span className="text-xs text-muted/70 font-mono">
                    Search clipboard history...
                  </span>
                </div>
              </div>

              <div className="p-3 space-y-4">
                {/* Pinned */}
                <div>
                  <p className="text-[10px] font-mono text-muted/70 tracking-wide mb-1.5 px-1">
                    PINNED
                  </p>
                  <div className="space-y-1">
                    {[
                      { text: "def open_about():  from about_window i...", time: "57m ago" },
                      { text: "on_about=open_about,", time: "57m ago" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[10px] text-muted/60 font-mono shrink-0">
                            {row.time}
                          </span>
                          <span className="text-xs text-foreground/90 truncate font-mono">
                            {row.text}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted/60 shrink-0 ml-2">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <QrCode className="w-3 h-3" />
                          <Copy className="w-3 h-3" />
                          <Trash2 className="w-3 h-3" />
                          <Flame className="w-3 h-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent */}
                <div>
                  <p className="text-[10px] font-mono text-muted/70 tracking-wide mb-1.5 px-1">
                    RECENT
                  </p>
                  <div className="space-y-1">
                    {[
                      { text: "npm run build", time: "2m ago" },
                      { text: "https://clipvault.app/docs", time: "8m ago" },
                      { text: '{"status": "ok", "id": 42}', time: "14m ago" },
                      { text: "192.168.1.42", time: "1h ago" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[10px] text-muted/60 font-mono shrink-0">
                            {row.time}
                          </span>
                          <span className="text-xs text-foreground/90 truncate font-mono">
                            {row.text}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted/40 shrink-0 ml-2">
                          <Star className="w-3 h-3" />
                          <QrCode className="w-3 h-3" />
                          <Copy className="w-3 h-3" />
                          <Trash2 className="w-3 h-3" />
                          <Flame className="w-3 h-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative border-t border-border-color">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-lg mb-14">
            <p className="font-mono text-xs text-accent mb-3 tracking-wide">
              features
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Everything stays yours.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border-t border-l border-border-color">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-background p-6 border-r border-b border-border-color hover:bg-surface transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <f.icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {f.description}
                </p>
                {f.image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-border-color">
                    <img src={f.image} alt={f.title} className="w-full block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative border-t border-border-color">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-lg mb-14">
            <p className="font-mono text-xs text-accent mb-3 tracking-wide">
               how it works
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Three steps. Zero cloud.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="font-mono text-xs text-accent border border-accent/30 rounded-full w-7 h-7 flex items-center justify-center mb-4">
                01
              </span>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                Install with one command
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Runs as a lightweight system-tray app on Ubuntu, Linux Mint, and
                other GTK3-based distros.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-accent border border-accent/30 rounded-full w-7 h-7 flex items-center justify-center mb-4">
                02
              </span>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                Copy anything
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Every copy is saved automatically — searchable, pinnable, and
                type-detected (JSON, code, URLs, JWTs) with zero setup.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-accent border border-accent/30 rounded-full w-7 h-7 flex items-center justify-center mb-4">
                03
              </span>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                Scan a QR or sync across devices
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Send any entry to your phone over local HTTPS, or let LAN peer
                sync mirror your history across your own machines.
              </p>
              <div className="rounded-lg overflow-hidden border border-border-color max-w-[220px]">
                <img
                  src="/screenshots/qr-modal.png"
                  alt="ClipVault QR code modal"
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative border-t border-border-color">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-muted">
          <span>Made by Estifanos</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/estifanosbereket1/clipvault"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/estifanosbereket1/clipvault"
              className="hover:text-foreground transition-colors"
            >
              Star this project
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
