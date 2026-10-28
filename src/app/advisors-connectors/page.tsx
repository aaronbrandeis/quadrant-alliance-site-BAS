import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import { Briefcase, Factory, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Advisors & Connectors",
  description:
    "We work with business brokers, controls manufacturers and distributors, and industry veterans to support independent building automation integrators nationwide.",
  alternates: { canonical: "/advisors-connectors" },
  openGraph: {
    title: "Advisors & Connectors",
    description:
      "We work with business brokers, controls manufacturers and distributors, and industry veterans to support independent building automation integrators nationwide.",
    url: "/advisors-connectors",
  },
};

const connections = [
  {
    icon: Briefcase,
    title: "Business Brokers & Intermediaries",
    description:
      "Straightforward, honest engagement and smooth execution for your client.",
  },
  {
    icon: Factory,
    title: "Controls Manufacturers & Distributors",
    description:
      "A long-term, high-integrity partner dedicated to growing our customer base and expanding installed systems in the field.",
  },
  {
    icon: Network,
    title: "Industry Advisors & Connectors",
    description:
      "We actively collaborate with industry veterans, consultants, and operators who want to be part of a growing platform in the next stage of their career.",
  },
];

export default function AdvisorsConnectorsPage() {
  return (
    <>
      <PageHero
        slot="networkHero"
        art="grid"
        eyebrow="Advisors & Connectors"
        headline="Partnering Across the Building Automation Ecosystem"
        subhead="We work closely with business brokers, controls manufacturers, distributors, and industry veterans to support independent building automation integrators nationwide."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-brand-600">
              Who We Connect With
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {connections.map((item, i) => (
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
    </>
  );
}
