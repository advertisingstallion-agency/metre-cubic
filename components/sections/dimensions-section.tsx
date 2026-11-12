"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pic3 from "@/app/assets/pic3.png";

const DIMENSIONS = [
  { label: "Length", target: 2, decimals: 2, prefix: "", unit: "m" },
  { label: "Width", target: 0.6, decimals: 2, prefix: "", unit: "m" },
  { label: "Height", target: 0.45, decimals: 2, prefix: "", unit: "m" },
  { label: "Weight", target: 480, decimals: 0, prefix: "≈ ", unit: "kg" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function CountUp({
  target,
  decimals,
  prefix,
  active,
  duration = 1200,
}: {
  target: number;
  decimals: number;
  prefix: string;
  active: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
    </>
  );
}

export function DimensionsSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="dimensions" className="bg-white py-20 sm:py-28">
      <div className="w-full px-6 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#1b1812]" />
          <p className="text-[12px] font-semibold tracking-[0.3em] text-[#3a362e] uppercase">
            Dimensions
          </p>
        </div>
        <h2 className="mt-6 max-w-xl font-serif text-[2.5rem] leading-[1.05] font-normal italic tracking-tight text-[#1b1812] sm:text-[3rem]">
          One piece, three measurements.
        </h2>

        <div ref={ref} className="relative mt-14">
          <div
            className={`h-0.5 origin-left bg-[#1b1812] transition-transform duration-700 ease-out ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {DIMENSIONS.map((dim, index) => (
              <div
                key={dim.label}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
                className={`relative py-7 pr-6 transition-all duration-700 ease-out sm:px-8 sm:first:pl-0 ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <span className="absolute top-0 left-0 h-2.5 w-px bg-[#c9791f]" />
                <p className="mt-6 font-mono text-3xl font-medium tracking-tight text-[#1b1812] tabular-nums sm:text-4xl">
                  <CountUp
                    target={dim.target}
                    decimals={dim.decimals}
                    prefix={dim.prefix}
                    active={inView}
                  />
                  <span className="ml-1 font-sans text-lg font-medium text-[#6b6355]">
                    {dim.unit}
                  </span>
                </p>
                <p className="mt-2 font-sans text-[12px] font-medium tracking-widest text-[#6b6355] uppercase">
                  {dim.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute -inset-4 -z-10 rounded-sm border border-[#1b1812]/15 sm:-inset-6" />
          <div className="relative aspect-16/7 w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(27,24,18,0.35)]">
            <Image
              src={pic3}
              alt="Technical drawing of the CUBIC bench"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
