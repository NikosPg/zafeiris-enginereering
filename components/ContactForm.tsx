"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Ευχαριστούμε!</p>
        <p className="mt-1 text-sm">
          Άνοιξε η εφαρμογή email σας για να ολοκληρώσετε την αποστολή. Αν δεν
          άνοιξε, στείλτε μας email στο{" "}
          <a href={contact.emailHref} className="font-bold underline">
            {contact.email}
          </a>{" "}
          ή καλέστε{" "}
          <a href={contact.phoneHref} className="font-bold underline">
            {contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const phone = String(data.get("phone") || "");
        const message = String(data.get("message") || "");
        const subject = encodeURIComponent(`Επικοινωνία από το site — ${name}`);
        const body = encodeURIComponent(
          `Ονοματεπώνυμο: ${name}\nEmail: ${email}\nΤηλέφωνο: ${phone}\n\n${message}`
        );
        window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ονοματεπώνυμο" name="name" required />
        <Field label="Τηλέφωνο" name="phone" type="tel" />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="block text-sm font-semibold text-slate-700">
          Μήνυμα
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        Αποστολή
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
