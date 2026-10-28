import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import ImageSlot from "@/components/ImageSlot";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-600">
              Who We Are
            </p>
            <p className="mt-6 text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
              Operator-led, founder-focused. We empower leading independent
              building automation integrators to support their technicians,
              grow their customer base, and endure for decades to come.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-500"
            >
              About Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <ImageSlot
                slot="whoWeAre"
                art="panel"
                sizes="(min-width: 1024px) 40vw, 90vw"
                imgClassName="saturate-[0.6] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink-300 bg-ink-200 py-24">
        <div className="bg-blueprint-light absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-500/12 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto h-1 w-14 rounded-full bg-brand-600" />
          <h2 className="mt-8 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
            How We Support Our Partners
          </h2>
          <p className="mt-6 text-xl font-medium leading-snug text-ink-600 sm:text-2xl">
            We take on the administrative and backend heavy lifting so local
            teams can focus entirely on what they do best in the field. By
            investing directly in modern service platforms, technician training
            and certification, and the engineering bench that complex projects
            demand, we handle the operational burdens so independent
            integrators can scale with confidence.
          </p>
        </Reveal>
      </section>
    </>
  );
}
