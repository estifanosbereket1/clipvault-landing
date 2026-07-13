import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — ClipVault",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-10"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-3xl font-bold tracking-tight mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-muted mb-12">Last updated July 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-lg font-semibold mb-3">
              Open source
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              ClipVault is open-source software. The complete source code is
              available on{" "}
              <a
                href="https://github.com/estifanosbereket1/clipvault"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
              , and you are encouraged to review it before installing. Anyone
              can inspect exactly what the application does on your machine.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-3">
              No warranty
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              ClipVault is provided "as is," without warranty of any kind,
              express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. In no event will the author be liable for any
              claim, damages, or other liability arising from the use of the
              software.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-3">
              Privacy
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              ClipVault does not send clipboard data or usage telemetry to any
              server operated by the developer. Clipboard sync and QR-to-phone
              transfer happen directly between your own devices over your
              local network. The only thing recorded outside your devices is
              a timestamp and a randomly generated identifier when you agree
              to these terms — no personal data, no clipboard content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold mb-3">
              Agreement
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              By downloading and installing ClipVault, you agree to the terms
              above.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
