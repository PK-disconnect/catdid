import Link from "next/link";
import { LAB, PROJECTS } from "@/lib/data";
import SignalTracker from "@/components/SignalTracker";
import { Arrow, projectIcon } from "@/components/Icons";
import { accentHex } from "@/components/accent";

const STATS = [
  { value: "30+", label: "Peer-reviewed publications" },
  { value: "5", label: "Active research projects" },
  { value: "13", label: "Researchers & students" },
  { value: "10yr", label: "Of disease modeling" },
];

const APPROACH = [
  {
    title: "Data fusion",
    body: "We merge epidemiological surveillance with climate and air-quality data to see the full picture.",
    accent: "sky",
  },
  {
    title: "Models that explain",
    body: "Statistical, machine-learning, and compartmental SIR/SEIR models reveal the drivers behind outbreaks.",
    accent: "mint",
  },
  {
    title: "Actionable insight",
    body: "We translate complex patterns into clear guidance for public-health agencies and communities.",
    accent: "blush",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-4">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="neu-card p-8 sm:p-12 flex flex-col justify-center">
            <span className="neu-chip self-start mb-5 font-mono uppercase tracking-wider">
              {LAB.affiliation.split(",")[0]}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
              Climate, air pollution &amp; the{" "}
              <span className="text-accent">dynamics of disease</span>.
            </h1>
            <p className="mt-5 text-ink-soft text-lg leading-relaxed">
              {LAB.tagline}
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              {LAB.acronym}: {LAB.full}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="neu-btn px-6 py-3 text-accent">
                Explore our research <Arrow className="w-4 h-4" />
              </Link>
              <Link href="/people" className="neu-btn px-6 py-3">
                Meet the team
              </Link>
            </div>
          </div>

          <SignalTracker />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="neu-card p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-accent">{s.value}</p>
              <p className="mt-2 text-sm text-ink-soft leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-ink tracking-tight">How we work</h2>
          <p className="mt-3 text-ink-soft leading-relaxed">{LAB.approach}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {APPROACH.map((a) => (
            <div key={a.title} className="neu-card p-7">
              <span
                className="block w-12 h-12 rounded-full mb-5"
                style={{
                  background: `linear-gradient(145deg, ${accentHex(a.accent)}, #ffffff)`,
                  boxShadow: "5px 5px 11px #c8ccd6, -5px -5px 11px #ffffff",
                }}
              />
              <h3 className="font-semibold text-ink text-lg">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-ink tracking-tight">Research projects</h2>
            <p className="mt-2 text-ink-soft">Where climate signals meet disease dynamics.</p>
          </div>
          <Link href="/projects" className="neu-btn px-5 py-2.5 text-sm text-accent">
            View all <Arrow className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => {
            const Icon = projectIcon[p.icon];
            return (
              <Link
                key={p.title}
                href="/projects"
                className="neu-card p-7 group hover:shadow-neu-sm transition-all duration-200"
              >
                <span
                  className="grid place-items-center w-14 h-14 rounded-neu p-3.5 mb-5 text-ink"
                  style={{
                    background: `linear-gradient(145deg, ${accentHex(p.accent)}, #ffffff)`,
                    boxShadow: "5px 5px 11px #c8ccd6, -5px -5px 11px #ffffff",
                  }}
                >
                  <Icon />
                </span>
                <h3 className="font-semibold text-ink text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                  {p.summary}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="neu-card p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-ink tracking-tight">
            Workshop: Infectious Disease Modeling
          </h2>
          <p className="mt-4 text-ink-soft max-w-2xl mx-auto leading-relaxed">
            We host a workshop (in Thai and English) covering fundamental concepts
            through real-world applications, including R₀ and Rₜ estimation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/activities" className="neu-btn px-6 py-3 text-accent">
              See our activities <Arrow className="w-4 h-4" />
            </Link>
            <Link href="/publications" className="neu-btn px-6 py-3">
              Read our publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
