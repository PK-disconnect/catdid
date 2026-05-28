import PageHeader from "@/components/PageHeader";
import { ACTIVITIES } from "@/lib/data";
import { activityIcon } from "@/components/Icons";
import { accentHex } from "@/components/accent";

export const metadata = {
  title: "Activities | CAT-DID Lab",
  description: "Meetings, conferences, summer schools, and gatherings of the CAT-DID Lab.",
};

export default function ActivitiesPage() {
  return (
    <div className="space-y-12 pb-4">
      <PageHeader
        eyebrow="Lab life"
        title="Activities"
        subtitle="From weekly group meetings to international summer schools: the moments that keep the team curious and connected."
      />

      <section className="mx-auto max-w-5xl px-4">
        <div className="grid sm:grid-cols-2 gap-6">
          {ACTIVITIES.map((a) => {
            const Icon = activityIcon[a.icon];
            return (
              <article key={a.title} className="neu-card p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="grid place-items-center w-14 h-14 rounded-neu p-3.5 text-ink shrink-0"
                    style={{
                      background: `linear-gradient(145deg, ${accentHex(a.accent)}, #ffffff)`,
                      boxShadow: "5px 5px 11px #c8ccd6, -5px -5px 11px #ffffff",
                    }}
                  >
                    <Icon />
                  </span>
                  {a.date && <span className="neu-chip font-mono">{a.date}</span>}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-ink">{a.title}</h2>
                  {a.location && (
                    <p className="text-sm text-accent font-medium mt-1">{a.location}</p>
                  )}
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">{a.blurb}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
