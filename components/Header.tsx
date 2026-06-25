"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site, contact } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200">
      {/* Λογότυπο banner — πλήρους πλάτους */}
      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <Link href="/" aria-label={`${site.name} — ${site.tagline}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.jpg"
              alt={`${site.name} — ${site.tagline}`}
              className="mx-auto w-full max-w-4xl"
            />
          </Link>
        </div>
      </div>

      {/* Μπάρα πλοήγησης */}
      <div className="sticky top-0 z-50 bg-brand-700 text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <nav className="hidden items-center md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-white/90 transition hover:bg-brand-600 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 py-3.5 text-sm font-bold text-white md:flex"
          >
            ☎ {contact.phone}
          </a>

          {/* Mobile */}
          <span className="py-3 text-sm font-bold uppercase tracking-wide md:hidden">
            Μενού
          </span>
          <button
            aria-label="Μενού"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-white md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-brand-600 bg-brand-700 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneHref}
              className="block px-4 py-3 text-sm font-bold text-white"
            >
              ☎ {contact.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
