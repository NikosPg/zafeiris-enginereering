"use client";

import { useState } from "react";
import { contact, web3formsKey } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", web3formsKey);
    data.append("subject", `Επικοινωνία από το site — ${data.get("name")}`);
    data.append("from_name", "Zafeiris Engineering");

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Ευχαριστούμε για το μήνυμά σας!</p>
        <p className="mt-1 text-sm">
          Το μήνυμα στάλθηκε με επιτυχία. Θα επικοινωνήσουμε μαζί σας σύντομα.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε email στο{" "}
          <a href={contact.emailHref} className="font-bold underline">
            {contact.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Αποστολή…" : "Αποστολή"}
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
