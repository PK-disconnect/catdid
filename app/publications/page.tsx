import PageHeader from "@/components/PageHeader";
import { PUBLICATIONS } from "@/lib/data";

export const metadata = {
  title: "Publications — CAT-DID Lab",
  description: "Peer-reviewed publications from the CAT-DID Lab, 2015–2026.",
};

export default function PublicationsPage() {
  const total = PUBLICATIONS.reduce((n, y) => n + y.items.length, 0);

  return (
    <div className="space-y-12 pb-4">
      <PageHeader
        eyebrow="Output"
        title="Publications"
        subtitle={`${total} peer-reviewed works on infectious-disease modeling, climate, and air pollution — spanning 2015 to 2026.`}
      />

      <section className="mx-auto max-w-4xl px-4 space-y-8">
        {PUBLICATIONS.map((group) => (
          <div key={group.year} className="neu-card p-7 sm:p-9">
            <div className="flex items-center gap-4 mb-5">
              <h2 className="text-2xl font-bold text-accent font-mono">{group.year}</h2>
              <span className="neu-chip">{group.items.length}</span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <ol className="space-y-4">
              {group.items.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid place-items-center shrink-0 w-7 h-7 rounded-full bg-surface shadow-neu-sm text-xs font-mono text-ink-soft">
                    {i + 1}
                  </span>
                  <p className="text-sm text-ink leading-relaxed pt-1">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
}
