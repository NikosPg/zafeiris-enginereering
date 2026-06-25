import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { profile, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Προφίλ",
  description: `${site.ownerName}, ${site.ownerTitle} — το προφίλ του τεχνικού γραφείου.`,
};

export default function ProfilePage() {
  return (
    <>
      <PageHero
        title="Προφίλ"
        subtitle={`${site.ownerName} · ${site.ownerTitle}`}
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
          <figure className="mx-auto w-full max-w-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.jpg"
              alt={site.ownerName}
              className="w-full rounded-xl border border-slate-200 object-cover shadow-sm"
            />
            <figcaption className="mt-3 text-center">
              <p className="font-bold text-slate-900">{site.ownerName}</p>
              <p className="text-sm text-slate-500">{site.ownerTitle}</p>
            </figcaption>
          </figure>

          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            {profile.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">Σταθμοί πορείας</h2>
          <ol className="mt-8 space-y-6 border-l-2 border-brand-100 pl-8">
            {profile.milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[2.6rem] flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  •
                </span>
                <p className="font-mono text-sm font-bold text-brand-600">
                  {m.year}
                </p>
                <p className="mt-1 text-slate-700">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
