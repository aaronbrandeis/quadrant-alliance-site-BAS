import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";

export default function CTASection({
  headline,
  copy,
  buttonLabel,
  buttonHref,
}: {
  headline: string;
  copy: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-ink-300 bg-ink-200 py-24">
      <ImageSlot slot="ctaBackdrop" art="grid" opacity="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-200 via-ink-200/85 to-brand-100/60" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto h-1 w-14 rounded-full bg-brand-600" />
        <h2 className="mt-8 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-ink-600">{copy}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
