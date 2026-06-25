import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Έργα",
  description:
    "Επιλεγμένα έργα και εργασίες του τεχνικού γραφείου ανά κατηγορία υπηρεσίας.",
};

export default function ProjectsPage() {
  const categories = services.filter((s) => s.projects.length > 0);

  return (
    <>
      <PageHero
        title="Έργα"
        subtitle="Ενδεικτικά έργα και εργασίες που έχουμε υλοποιήσει."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Gallery />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Έργα ανά κατηγορία
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((s) => (
            <div
              key={s.slug}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-brand-700">{s.title}</h2>
              <ul className="mt-4 space-y-3">
                {s.projects.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
