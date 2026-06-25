import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: `Επικοινωνήστε μαζί μας — ${contact.address}, τηλ. ${contact.phone}.`,
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.mapsQuery
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Επικοινωνία"
        subtitle="Είμαστε στη διάθεσή σας για το έργο σας."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Στοιχεία Επικοινωνίας</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-2xl">☎</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Τηλέφωνο
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="text-lg font-bold text-brand-700 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Διεύθυνση
                  </p>
                  <p className="text-lg text-slate-800">{contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Social
                  </p>
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-brand-700 hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Χάρτης"
                src={mapSrc}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Στείλτε μας μήνυμα
            </h2>
            <p className="mt-2 text-slate-600">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
