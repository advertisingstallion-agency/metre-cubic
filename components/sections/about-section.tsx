import { Hammer, MapPin, SearchCheck, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MapPin,
    label: "Stone selection",
    description:
      "Quarries selected in France for the quality and consistency of the grain.",
  },
  {
    icon: Hammer,
    label: "Handcrafted shaping",
    description:
      "Cutting and polishing done in-house, piece by piece, with no shortcuts.",
  },
  {
    icon: SearchCheck,
    label: "Quality control",
    description:
      "Every piece is inspected before shipping to guarantee precise dimensions.",
  },
  {
    icon: Truck,
    label: "Delivery and installation",
    description: "Secure transport and on-site setup, ready to use.",
  },
  {
    icon: ShieldCheck,
    label: "10-year warranty",
    description: "Covers the structure and the stone's resistance to weather.",
  },
];

export function AboutSection() {
  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-[#1b1812] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(224,168,96,0.08)_1px,transparent_1px)] bg-size-[26px_26px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#1b1812] via-transparent to-[#1b1812]"
      />

      <div className="relative w-full px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e0a860]" />
              <p className="text-[12px] font-semibold tracking-[0.3em] text-[#e0a860] uppercase">
                About
              </p>
            </div>
            <h2 className="mt-6 font-noto text-[2.5rem] leading-[1.1] font-bold tracking-tight text-[#f7f5f0] sm:text-[3rem]">
              From the quarry
              <br />
              <span className="text-[#e0a860]">to your garden.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#b7b0a0] sm:text-lg">
              metre CUBIC designs and shapes outdoor stone furniture for
              gardens, parks and public spaces. Few references, one
              requirement: every piece must stand for decades without
              faltering.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-7 bottom-7 left-7 w-px bg-linear-to-b from-[#e0a860]/50 via-[#3a362e] to-[#3a362e]" />
            <div className="space-y-12">
              {STEPS.map((step, index) => (
                <div key={step.label} className="relative flex gap-6">
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-[#e0a860]/40 bg-[#1b1812] shadow-[0_0_0_6px_#1b1812]">
                    <step.icon
                      className="size-5 text-[#e0a860]"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div className="pt-1.5">
                    <p className="text-[12px] font-semibold tracking-[0.25em] text-[#e0a860] uppercase">
                      Step 0{index + 1}
                    </p>
                    <p className="mt-2 font-noto text-xl font-semibold text-[#f7f5f0]">
                      {step.label}
                    </p>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#b7b0a0]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
