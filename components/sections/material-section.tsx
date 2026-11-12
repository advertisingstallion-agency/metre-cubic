import Image from "next/image";
import { Hexagon, Shield, Sun } from "lucide-react";
import pic2 from "@/app/assets/pic2.png";

const TRAITS = [
  { label: "Frost resistant", icon: Shield },
  { label: "Maintenance-free", icon: Sun },
  { label: "French origin", icon: Hexagon },
];

export function MaterialSection() {
  return (
    <section id="matiere" className="bg-white py-20 sm:py-28">
      <div className="grid w-full grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-16">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#1b1812]" />
            <p className="text-[12px] font-semibold tracking-[0.3em] text-[#3a362e] uppercase">
              The Material
            </p>
          </div>
          <h2 className="mt-6 font-noto text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-[#1b1812] sm:text-[3rem]">
            One material. A presence of its own.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a453b] sm:text-lg">
            Every bench is cut from a single block of granite, chosen for its
            grain and tone. Natural stone ages without degrading: frost, rain
            and sun only give it a deeper patina.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4a453b] sm:text-lg">
            No surface treatment, no upkeep required — only time passing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#e4dfd3] pt-6 text-[15px] text-[#1b1812]">
            {TRAITS.map((trait, i) => (
              <span key={trait.label} className="flex items-center gap-6">
                <span className="flex items-center gap-3">
                  <trait.icon className="size-5 shrink-0 text-[#c9791f]" />
                  {trait.label}
                </span>
                {i < TRAITS.length - 1 && (
                  <span className="hidden h-5 w-px bg-[#e4dfd3] sm:block" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-4 -z-10 rounded-sm border border-[#1b1812]/15 sm:-inset-6" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(27,24,18,0.35)]">
            <Image
              src={pic2}
              alt="Grain and texture of the solid granite"
              fill
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-sm bg-[#f7f5f0]/90 px-3 py-1.5 text-[11px] font-medium tracking-widest text-[#1b1812] uppercase backdrop-blur-sm">
              Solid granite
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
