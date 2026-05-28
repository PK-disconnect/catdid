"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";
import { Logo, Menu, Close } from "./Icons";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav className="mx-auto max-w-6xl neu-card px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span className="grid place-items-center w-10 h-10 rounded-full bg-surface shadow-neu-sm text-accent p-2.5">
            <Logo />
          </span>
          <span className="font-semibold tracking-tight text-ink text-lg">
            CAT<span className="text-accent">-</span>DID
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1.5">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "shadow-neu-inset text-accent"
                      : "text-ink-soft hover:text-ink hover:shadow-neu-sm"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full neu-btn p-2.5"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl neu-card mt-3 p-3 flex flex-col gap-1.5">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-3 rounded-neu text-sm font-medium transition-all ${
                  active
                    ? "shadow-neu-inset text-accent"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
