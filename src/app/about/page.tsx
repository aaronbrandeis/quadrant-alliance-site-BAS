import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Operator-led and founder-focused. Meet the team behind Quadrant Alliance and the story behind our commercial building automation platform.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description:
      "Operator-led and founder-focused. Meet the team behind Quadrant Alliance and the story behind our commercial building automation platform.",
    url: "/about",
  },
};

const team = [
  { name: "Jason Vahn", title: "Co-founder", photo: "/assets/team/jason.jpg" },
  {
    name: "Max Francois-Poncet",
    title: "Co-founder",
    photo: "/assets/team/max.jpg",
  },
  {
    name: "Aaron Brandeis",
    title: "Operating Partner",
    photo: "/assets/team/aaron.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        slot="aboutHero"
        art="mechanical"
        eyebrow="About Us"
        headline="Experienced Operators. Dedicated Stewards."
        subhead="Hands-on operators bringing patient capital and operational support to building automation and controls."
      />

      <section className="bg-white py-24">
        <Reveal className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
            We (Max and Jason) met freshman year in college, becoming lifelong
            friends and eventually business partners. In 2019, we started a
            business together, co-founding Fidelity Memorial Group in
            partnership with a multi-generational, family-owned business in the
            Southeast. We grew the company into an industry leader while keeping
            local teams, culture, and brands intact. Today, the founding family
            still runs the business, while we have shifted our attention to
            building a best-in-class building automation and controls company.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
            Buildings run on control systems that are rarely seen and rarely
            replaced, designed, installed, and maintained by regional
            integrators. As power demand and energy costs rise, those systems
            increasingly determine what a building costs to operate.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
            We spoke with regional controls integrators who built excellent
            businesses, but were often constrained by labor shortages, keeping
            certifications current across manufacturer platforms, and meeting
            the cybersecurity and analytics expectations. We set out to build a
            platform that supports field teams with the capital and systems
            they need to succeed, while maintaining their local brands.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
            Aaron joined as the third partner. We bring an owner&apos;s
            mindset, respect for how these businesses were built, and capital
            to hold them for the long term.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-ink-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <TeamCard
                  name={member.name}
                  title={member.title}
                  photo={member.photo}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
