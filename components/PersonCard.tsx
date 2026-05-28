import type { Person } from "@/lib/data";
import Avatar from "./Avatar";
import { Mail, GitHub, Scholar } from "./Icons";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <article className="neu-card p-6 flex flex-col gap-4 h-full">
      <header className="flex items-center gap-4">
        <Avatar name={person.name} accent={person.accent} />
        <div className="min-w-0">
          <h3 className="font-semibold text-ink leading-snug">{person.name}</h3>
          <p className="text-sm text-accent font-medium">{person.role}</p>
        </div>
      </header>

      {person.funding && <span className="neu-chip self-start">{person.funding}</span>}

      {person.education && (
        <ul className="space-y-1 text-sm text-ink-soft">
          {person.education.map((e) => (
            <li key={e} className="flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}

      {(person.research || person.focus) && (
        <p className="text-sm text-ink-soft leading-relaxed">
          {person.research ?? person.focus}
        </p>
      )}

      {person.note && (
        <p className="text-xs text-ink-soft italic">{person.note}</p>
      )}

      <div className="mt-auto pt-2 flex items-center gap-2.5">
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            aria-label={`Email ${person.name}`}
            title={person.email}
            className="grid place-items-center w-9 h-9 rounded-full neu-btn p-2.5 text-ink-soft hover:text-accent"
          >
            <Mail />
          </a>
        )}
        {person.scholar && (
          <span
            aria-label="Google Scholar profile available"
            title="Google Scholar"
            className="grid place-items-center w-9 h-9 rounded-full bg-surface shadow-neu-sm p-2.5 text-ink-soft"
          >
            <Scholar />
          </span>
        )}
        {person.github && (
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on GitHub`}
            className="grid place-items-center w-9 h-9 rounded-full neu-btn p-2.5 text-ink-soft hover:text-accent"
          >
            <GitHub />
          </a>
        )}
      </div>
    </article>
  );
}
