"use client";

import { useState } from "react";

const field =
  "mt-1.5 w-full rounded-lg border border-ink-300 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 disabled:bg-ink-50 disabled:text-ink-400";

const FALLBACK = "aaron@quadrantalliance.com";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        setError(payload.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("We could not reach the server.");
      setStatus("error");
    }
  }

  // Only shown once the send has actually succeeded.
  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <h2 className="font-heading text-xl font-semibold text-ink-900">
          Thank you.
        </h2>
        <p className="mt-2 text-ink-500">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  const busy = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-700">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          required
          disabled={busy}
          type="text"
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-ink-700"
        >
          Company Name
        </label>
        <input
          id="company"
          name="company"
          required
          disabled={busy}
          type="text"
          autoComplete="organization"
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-ink-700"
        >
          Email or Phone Number
        </label>
        <input
          id="contact"
          name="contact"
          required
          disabled={busy}
          type="text"
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink-700"
        >
          How can we help?{" "}
          <span className="font-normal text-ink-400">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={busy}
          className={field}
        />
      </div>

      {/* Honeypot. Hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-ink-700"
        >
          <span className="font-semibold text-ink-900">
            Your message did not send.{" "}
          </span>
          {error} Please email us directly at{" "}
          <a href={`mailto:${FALLBACK}`} className="font-medium underline">
            {FALLBACK}
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:bg-ink-300 sm:w-auto"
      >
        {busy ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
