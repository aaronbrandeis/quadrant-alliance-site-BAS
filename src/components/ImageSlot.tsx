import Image from "next/image";
import { media } from "@/lib/media";
import Plate, { type PlateName } from "./Plate";

/**
 * Fills a `relative` parent with either the photograph registered for
 * `slot` in src/lib/media.ts, or the line-art plate named by `art` if no
 * photograph has been registered yet.
 */
export default function ImageSlot({
  slot,
  art,
  sizes = "100vw",
  priority = false,
  opacity = "opacity-100",
  imgClassName = "saturate-[0.85]",
  plateTone = "light",
}: {
  slot: string;
  art: PlateName;
  sizes?: string;
  priority?: boolean;
  opacity?: string;
  imgClassName?: string;
  plateTone?: "dark" | "light";
}) {
  const src = media[slot];

  if (src) {
    return (
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${opacity} ${imgClassName}`}
      />
    );
  }

  const dark = plateTone === "dark";

  return (
    <div
      className={`absolute inset-0 ${
        dark ? "bg-ink-900 text-brand-200" : "bg-ink-100 text-ink-400"
      }`}
    >
      <div
        className={`absolute inset-0 opacity-60 ${
          dark ? "bg-blueprint" : "bg-blueprint-light"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <Plate name={art} />
        </div>
      </div>
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
