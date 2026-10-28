import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import type { PlateName } from "@/components/Plate";

export const metadata: Metadata = {
  title: "Areas of Interest",
  description:
    "The five pillars we partner across: building automation and controls, HVAC and mechanical integration, integrated building systems, planned service and maintenance, and energy and analytics.",
  alternates: { canonical: "/areas-of-interest" },
  openGraph: {
    title: "Areas of Interest",
    description:
      "The five pillars we partner across: building automation and controls, HVAC and mechanical integration, integrated building systems, planned service and maintenance, and energy and analytics.",
    url: "/areas-of-interest",
  },
};

const pillars: {
  title: string;
  description: string;
  slot: string;
  art: PlateName;
  filter?: string;
  items: string[];
}[] = [
  {
    title: "Building Automation & Controls",
    description:
      "Integrators who design, install, and program the control layer that every other building system runs on.",
    slot: "categoryControls",
    art: "panel",
    items: [
      "BACnet, Niagara, and open-protocol system integration",
      "Direct digital controls (DDC) and field controller installation",
      "Front-end graphics, dashboards, and operator workstations",
      "BAS retrofits, migrations, and legacy system modernization",
    ],
  },
  {
    title: "HVAC & Mechanical Systems Integration",
    description:
      "Teams who tie controls to the equipment itself, from air handlers and chiller plants down to terminal units.",
    slot: "categoryMechanical",
    art: "mechanical",
    items: [
      "Air handler, rooftop unit, and VAV terminal controls",
      "Chiller and boiler plant sequencing and optimization",
      "Variable frequency drives, dampers, valves, and actuators",
      "Sensor networks, airflow stations, and mechanical room instrumentation",
    ],
  },
  {
    title: "Integrated Building Systems",
    description:
      "Integrators extending the same control layer to lighting, security, access, and life safety.",
    slot: "categoryIntegrated",
    art: "network",
    items: [
      "Networked lighting control and daylight harvesting",
      "Access control, video surveillance, and intrusion detection",
      "Fire alarm and mass notification system integration",
      "Converged building networks and single-pane-of-glass dashboards",
    ],
  },
  {
    title: "Planned Service & Maintenance",
    description:
      "Providers built on recurring service agreements, scheduled maintenance, and responsive field support.",
    slot: "categoryService",
    art: "sensor",
    items: [
      "Preventative maintenance (PM) agreements",
      "24/7 emergency response and remote diagnostics",
      "Controls cybersecurity patching and network hardening",
      "Technician training, certification, and owner handover",
    ],
  },
  {
    title: "Energy & Analytics",
    description:
      "Providers turning the data buildings already generate into measurable energy and cost reduction.",
    slot: "categoryEnergy",
    art: "grid",
    items: [
      "Fault detection and diagnostics (FDD) and continuous commissioning",
      "Submetering, trend logging, and utility bill verification",
      "Retro-commissioning and sequence-of-operations optimization",
      "Local energy and emissions compliance reporting",
    ],
  },
];

export default function AreasOfInterestPage() {
  return (
    <>
      <PageHero
        slot="areasHero"
        art="rooftop"
        eyebrow="Areas of Interest"
        headline="Where We Focus"
        subhead="We are focused on partnering with providers across five core pillars."
      />

      {pillars.map((pillar, i) => (
        <section
          key={pillar.title}
          className={`bg-white py-24 ${i > 0 ? "border-t border-ink-200" : ""}`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <ImageSlot
                  slot={pillar.slot}
                  art={pillar.art}
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  imgClassName={pillar.filter ?? "saturate-[0.85]"}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-heading text-base font-bold text-white">
                  {i + 1}
                </span>
                <div className="h-px flex-1 bg-ink-200" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
                {pillar.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                {pillar.description}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {pillar.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4 transition duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-lg font-medium text-ink-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
