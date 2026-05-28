import PageHeader from "@/components/PageHeader";
import PersonCard from "@/components/PersonCard";
import { STAFF, STUDENTS, ALUMNI } from "@/lib/data";

export const metadata = {
  title: "People | CAT-DID Lab",
  description: "Staff, students, and alumni of the CAT-DID Lab at Naresuan University.",
};

function Group({
  id,
  title,
  blurb,
  people,
  cols,
}: {
  id: string;
  title: string;
  blurb: string;
  people: typeof STAFF;
  cols: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 scroll-mt-28">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="text-2xl font-bold text-ink tracking-tight">{title}</h2>
        <span className="neu-chip">{people.length}</span>
        <span className="hidden sm:block flex-1 h-px bg-border" />
      </div>
      <p className="text-ink-soft mb-7 max-w-2xl">{blurb}</p>
      <div className={`grid gap-6 ${cols}`}>
        {people.map((p) => (
          <PersonCard key={p.name} person={p} />
        ))}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  return (
    <div className="space-y-16 pb-4">
      <PageHeader
        eyebrow="The team"
        title="People"
        subtitle="A multidisciplinary team of physicists, environmental scientists, and engineers working at the intersection of climate and public health."
      />
      <Group
        id="staff"
        title="Staff"
        blurb="Faculty and researchers leading the lab's scientific direction."
        people={STAFF}
        cols="md:grid-cols-2 lg:grid-cols-3"
      />
      <Group
        id="students"
        title="Students"
        blurb="Graduate and undergraduate researchers driving day-to-day modeling and analysis."
        people={STUDENTS}
        cols="sm:grid-cols-2 lg:grid-cols-3"
      />
      <Group
        id="alumni"
        title="Alumni"
        blurb="Former members who contributed to the lab and have moved on to new endeavors."
        people={ALUMNI}
        cols="sm:grid-cols-2 lg:grid-cols-3"
      />
    </div>
  );
}
