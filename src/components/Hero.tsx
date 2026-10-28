import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-ink-200 bg-ink-100">
      <div className="absolute inset-0">
        <ImageSlot
          slot="hero"
          art="rooftop"
          priority
          imgClassName="saturate-[0.75] contrast-[1.05]"
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ink-400/15 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-100 via-ink-100/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-100/95 via-ink-100/45 to-transparent" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <Reveal className="max-w-5xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-600">
            Quadrant Alliance
          </p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Keeping Buildings Running at Peak Performance
          </h1>
          <p className="mt-8 max-w-3xl text-xl font-medium leading-snug text-ink-600 sm:text-2xl">
            We partner with the industry&apos;s best independent controls
            integrators to keep hospitals, data centers, schools, and commercial
            facilities comfortable, efficient, and online.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/business-owners"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              For Business Owners
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white/60 px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ink-400 hover:bg-white"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
