"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import pic1 from "@/app/assets/pic1.png";
import pic2 from "@/app/assets/pic2.png";
import pic3 from "@/app/assets/pic3.png";

const FINISHES = ["Polished", "Raw", "Honed"] as const;
const SIZES = ["Compact", "Standard", "Long"] as const;

type Finish = (typeof FINISHES)[number];
type Size = (typeof SIZES)[number];

const FINISH_IMAGES: Record<Finish, StaticImageData> = {
  Polished: pic1,
  Raw: pic2,
  Honed: pic3,
};

const FINISH_DESCRIPTIONS: Record<Finish, string> = {
  Polished: "Smooth, glossy surface that reveals the full grain of the stone.",
  Raw: "Natural texture left by the cutting process, unpolished.",
  Honed: "Satin finish, soft to the touch, without shine.",
};

const SIZE_SPECS: Record<
  Size,
  { length: string; width: string; height: string; weight: string }
> = {
  Compact: { length: "1.50 m", width: "0.55 m", height: "0.45 m", weight: "≈ 360 kg" },
  Standard: { length: "2.00 m", width: "0.60 m", height: "0.45 m", weight: "≈ 480 kg" },
  Long: { length: "2.50 m", width: "0.65 m", height: "0.45 m", weight: "≈ 600 kg" },
};

export function ProductDetail() {
  const [finish, setFinish] = useState<Finish>("Polished");
  const [size, setSize] = useState<Size>("Standard");
  const specs = SIZE_SPECS[size];

  return (
    <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-sm border border-[#1b1812]/15 sm:-inset-6" />
          <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(27,24,18,0.35)]">
            <Image
              key={finish}
              src={FINISH_IMAGES[finish]}
              alt={`CUBIC bench, ${finish} finish`}
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {FINISHES.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFinish(f)}
              aria-label={`${f} finish`}
              aria-pressed={finish === f}
              className={`relative size-14 shrink-0 overflow-hidden rounded-sm ring-1 ring-offset-2 ring-offset-white transition-all ${
                finish === f
                  ? "ring-2 ring-[#c9791f]"
                  : "ring-[#e4dfd3] hover:ring-[#1b1812]/30"
              }`}
            >
              <Image
                src={FINISH_IMAGES[f]}
                alt=""
                fill
                placeholder="blur"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[12px] font-semibold tracking-[0.3em] text-[#c9791f] uppercase">
          The CUBIC Bench
        </p>
        <h1 className="mt-3 font-noto text-[2.25rem] leading-[1.05] font-semibold tracking-tight text-[#1b1812] sm:text-[2.75rem]">
          Carved from solid stone.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-[#4a453b]">
          A single block of solid granite, hand-cut and hand-shaped. No hidden
          frame, no assembly: the stone carries the stone.
        </p>

        <div className="mt-8">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-[#1b1812] uppercase">
            Finish
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {FINISHES.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFinish(f)}
                aria-pressed={finish === f}
                className={`cursor-pointer rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                  finish === f
                    ? "border-[#1b1812] bg-[#1b1812] text-[#f7f5f0]"
                    : "border-[#e4dfd3] text-[#3a362e] hover:border-[#1b1812]/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="mt-2 text-[13px] text-[#6b6355]">
            {FINISH_DESCRIPTIONS[finish]}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-[#1b1812] uppercase">
            Dimensions
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`cursor-pointer rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                  size === s
                    ? "border-[#1b1812] bg-[#1b1812] text-[#f7f5f0]"
                    : "border-[#e4dfd3] text-[#3a362e] hover:border-[#1b1812]/40"
                }`}
              >
                {s} — {SIZE_SPECS[s].length}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-[#e4dfd3] py-6 sm:grid-cols-4">
          {(
            [
              ["Length", specs.length],
              ["Width", specs.width],
              ["Height", specs.height],
              ["Weight", specs.weight],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-xl font-medium tracking-tight text-[#1b1812] tabular-nums">
                {value}
              </p>
              <p className="mt-1 text-[11px] font-medium tracking-widest text-[#6b6355] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#1d1c1b]">
          Made to order — quoted individually.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/#contact"
            className="group inline-flex cursor-pointer items-center gap-2.5 rounded-sm bg-[#1b1812] px-8 py-4 text-[15px] font-medium tracking-wide text-[#f7f5f0] transition-colors hover:bg-[#3a362e]"
          >
            Request a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#matiere"
            className="border-b border-[#1b1812]/40 py-2 text-[15px] font-medium text-[#1b1812] transition-colors hover:border-[#1b1812]"
          >
            Learn more about the material
          </Link>
        </div>
      </div>
    </div>
  );
}
