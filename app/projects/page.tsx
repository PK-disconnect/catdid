import PageHeader from "@/components/PageHeader";
import { PROJECTS } from "@/lib/data";
import { projectIcon } from "@/components/Icons";
import { accentHex } from "@/components/accent";

export const metadata = {
  title: "Projects | CAT-DID Lab",
  description:
    "Research projects on HFMD, influenza, leptospirosis, air pollution, and human mobility networks.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-4">
      <PageHeader
        eyebrow="Research"
        title="Projects"
        subtitle="Each project links a climate or environmental signal to the transmission dynamics of disease, then turns the result into something usable."
      />

      <section className="mx-auto max-w-6xl px-4 space-y-8">
        {PROJECTS.map((p, i) => {
          const Icon = projectIcon[p.icon];
          return (
            <article
              key={p.title}
              className="neu-card p-7 sm:p-10 grid lg:grid-cols-[auto_1fr] gap-7"
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                <span
                  className="grid place-items-center w-16 h-16 rounded-neu p-4 text-ink shrink-0"
                  style={{
                    background: `linear-gradient(145deg, ${accentHex(p.accent)}, #ffffff)`,
                    boxShadow: "5px 5px 11px #c8ccd6, -5px -5px 11px #ffffff",
                  }}
                >
                  <Icon />
                </span>
                <span className="neu-chip font-mono">0{i + 1}</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-ink tracking-tight">{p.title}</h2>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.summary}</p>

                <div className="mt-5 neu-inset p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Key findings
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{p.findings}</p>
                </div>

                {p.extra && (
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{p.extra}</p>
                )}

                {p.reference && (
                  <p className="mt-4 text-xs text-ink-soft font-mono leading-relaxed">
                    {p.reference}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
