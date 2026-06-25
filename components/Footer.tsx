import Link from "next/link";
import { nav, site, contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{site.name}</h3>
          <p className="mt-1 text-sm uppercase tracking-widest text-slate-400">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {site.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Πλοήγηση
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Στοιχεία Επικοινωνίας
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a href={contact.phoneHref} className="hover:text-white">
                ☎ {contact.phone}
              </a>
            </li>
            <li>📍 {contact.address}</li>
            <li>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name} — {site.tagline}. Με επιφύλαξη
        παντός δικαιώματος.
      </div>
    </footer>
  );
}
