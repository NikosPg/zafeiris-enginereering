import Link from "next/link";
import { site, contact, services, profile, news } from "@/lib/content";
import { Gallery } from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <img
          src="/images/slider.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/85 to-brand-900/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">
            {site.tagline} · {contact.area}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ολοκληρωμένες λύσεις Πολιτικού Μηχανικού
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ypiresies"
              className="rounded-md bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Οι Υπηρεσίες μας
            </Link>
            <a
              href={contact.phoneHref}
              className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              ☎ {contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Υπηρεσίες
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Καλύπτουμε όλο το φάσμα των εργασιών Πολιτικού Μηχανικού — από τη
            μελέτη και την αδειοδότηση έως την κατασκευή και την ενεργειακή
            αναβάθμιση.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/ypiresies#${s.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.short}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                Περισσότερα →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Το Γραφείο μας
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              {profile.paragraphs[0]}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {profile.paragraphs[1]}
            </p>
            <Link
              href="/profil"
              className="mt-8 inline-block rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
            >
              Δείτε το προφίλ
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              {site.ownerTitle}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {site.ownerName}
            </p>
            <ul className="mt-6 space-y-4">
              {profile.milestones.map((m) => (
                <li key={m.year} className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-brand-600">
                    {m.year}
                  </span>
                  <span className="text-sm text-slate-600">{m.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery / latest works */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Δουλειές μας
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              Τελευταία Έργα
            </h2>
          </div>
          <Link
            href="/erga"
            className="text-sm font-semibold text-brand-600 hover:underline"
          >
            Όλα τα έργα →
          </Link>
        </div>
        <Gallery />
      </section>

      {/* News + Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-8 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Νέα · {news.date}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {news.title}
            </h3>
            <p className="mt-3 text-slate-600">{news.body}</p>
          </div>

          <div className="flex flex-col justify-center rounded-xl bg-brand-700 p-8 text-white lg:col-span-2">
            <h3 className="text-2xl font-bold">Χρειάζεστε μηχανικό;</h3>
            <p className="mt-2 max-w-lg text-brand-100">
              Επικοινωνήστε μαζί μας για το έργο σας — οικοδομική άδεια,
              ανακαίνιση, ενεργειακό πιστοποιητικό ή τακτοποίηση αυθαιρέτου.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={contact.phoneHref}
                className="rounded-md bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                ☎ {contact.phone}
              </a>
              <Link
                href="/epikoinonia"
                className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Φόρμα επικοινωνίας
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
