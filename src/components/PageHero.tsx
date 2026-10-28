import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import type { PlateName } from "./Plate";

export default function PageHero({
  slot,
  art,
  eyebrow,
  headline,
  subhead,
}: {
  slot: string;
  art: PlateName;
  eyebrow?: string;
  headline: string;
  subhead?: string;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-center overflow-hidden border-b border-ink-200 bg-ink-100">
      <ImageSlot slot={slot} art={art} priority />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-100 via-ink-100/70 to-ink-100/35" />
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-500/12 blur-[110px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          {eyebrow && (
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-600">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-heading text-4xl font-bold text-ink-900 sm:text-5xl">
            {headline}
          </h1>
          {subhead && <p className="mt-6 text-lg text-ink-600">{subhead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
