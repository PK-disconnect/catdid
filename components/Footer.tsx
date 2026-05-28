import Link from "next/link";
import { LAB, NAV } from "@/lib/data";
import { Logo } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-12">
      <div className="mx-auto max-w-6xl neu-card p-8 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-surface shadow-neu-sm text-accent p-2.5">
                <Logo />
              </span>
              <span className="font-semibold text-ink text-lg">
                CAT<span className="text-accent">-</span>DID
              </span>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">{LAB.full}</p>
            <p className="text-sm text-ink-soft mt-3">{LAB.affiliation}</p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="neu-chip hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-xs text-ink-soft flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} CAT-DID Lab, Naresuan University.</span>
          <span>Redesigned with a neumorphic, pastel design system.</span>
        </div>
      </div>
    </footer>
  );
}
