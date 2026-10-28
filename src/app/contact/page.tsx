import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Get in touch with Quadrant Alliance. Confidential, low-pressure conversations with business owners, operators, and industry partners.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Conversation",
    description:
      "Get in touch with Quadrant Alliance. Confidential, low-pressure conversations with business owners, operators, and industry partners.",
    url: "/contact",
  },
};

const team = [
  { name: "Jason Vahn", email: "jason@quadrantalliance.com" },
  { name: "Max Francois-Poncet", email: "max@quadrantalliance.com" },
  { name: "Aaron Brandeis", email: "aaron@quadrantalliance.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        slot="contactHero"
        art="mechanical"
        eyebrow="Get In Touch"
        headline="Start a Conversation"
        subhead="We welcome confidential, low-pressure discussions with business owners, operators, and industry partners."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="rounded-2xl border border-ink-200 bg-white p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="rounded-2xl border border-ink-200 bg-white p-8">
              <h2 className="font-heading text-lg font-semibold text-ink-900">
                Direct Contact
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                {team.map((person) => (
                  <li key={person.email}>
                    <p className="font-medium text-ink-800">{person.name}</p>
                    <p className="text-ink-500">{person.email}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 rounded-xl bg-brand-50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-sm text-ink-600">
                  All communications are held strictly confidential.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
