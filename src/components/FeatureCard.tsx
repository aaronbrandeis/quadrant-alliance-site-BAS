import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-ink-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-900/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 transition duration-300 group-hover:bg-brand-600">
        <Icon
          className="h-6 w-6 text-brand-600 transition duration-300 group-hover:text-white"
          strokeWidth={1.75}
        />
      </div>
      <h3 className="mt-6 font-heading text-2xl font-bold text-ink-900 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-lg leading-relaxed text-ink-600">{description}</p>
    </div>
  );
}
