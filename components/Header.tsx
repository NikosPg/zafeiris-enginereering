"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site, contact } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt={`${site.name} — ${site.tagline}`}
            className="h-11 w-auto"
          />
          <span className="sr-only">
            {site.name} {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="ml-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            {contact.phone}
          </a>
        </nav>

        <button
          aria-label="Μενού"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-700 md:hidden"
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
        <nav className="border-t border-slate-200 bg-white md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="block px-4 py-3 text-sm font-bold text-brand-700"
          >
            ☎ {contact.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
