import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description:
    "Όλες οι υπηρεσίες του τεχνικού γραφείου: οικοδομικές άδειες, μελέτες, ανακαινίσεις, άδειες καταστημάτων, ενεργειακά πιστοποιητικά και υπηρεσίες μηχανικού.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Υπηρεσίες"
        subtitle="Πλήρης κάλυψη εργασιών Πολιτικού Μηχανικού, από τη μελέτη έως την κατασκευή."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-10">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                {s.description}
              </p>
              {s.projects.length > 0 && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    Ενδεικτικά έργα
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.projects.map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
