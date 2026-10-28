import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { Cpu, Building2, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "For Business Owners",
  description:
    "Exploring a transition for your building automation business? We welcome confidential, no-pressure conversations with owners planning for succession or their next stage of growth.",
  alternates: { canonical: "/business-owners" },
  openGraph: {
    title: "For Business Owners",
    description:
      "Exploring a transition for your building automation business? We welcome confidential, no-pressure conversations with owners planning for succession or their next stage of growth.",
    url: "/business-owners",
  },
};

const ourFocus = [
  {
    icon: Cpu,
    title: "Core Services",
    description:
      "Building automation design, installation, programming, and service, with a service-first approach to every customer.",
  },
  {
    icon: Building2,
    title: "Business Profile",
    description:
      "Local leaders with a strong reputation, a skilled engineering and technician bench, and long-standing facility and OEM relationships.",
  },
  {
    icon: Target,
    title: "Flexible Partnership",
    description:
      "We partner with owners looking to take their businesses to the next level, planning for succession, or wanting to take a step back in the near-term.",
  },
];

export default function BusinessOwnersPage() {
  return (
    <>
      <PageHero
        slot="ownersHero"
        art="panel"
        eyebrow="For Business Owners"
        headline="Quadrant Alliance is building an independent, technician-focused building automation business for the long haul."
        subhead="We are a team of hands-on operators who believe in building and preserving great businesses."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Focus
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {ourFocus.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Exploring a transition for your business?"
        copy="We welcome confidential, no-pressure conversations with fellow operators or industry participants."
        buttonLabel="Connect With Us"
        buttonHref="/contact"
      />
    </>
  );
}
