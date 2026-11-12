import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Cog, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import pic1 from "@/app/assets/pic1.png";

const DIMENSIONS = ["2.00 m", "0.60 m", "0.45 m"];

export function ProductSection() {
  return (
    <section id="banc" className="bg-white py-20 sm:py-28">
      <div className="grid w-full grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-16">
        <div className="relative aspect-square w-full overflow-hidden rounded-sm">
          <Image
            src={pic1}
            alt="The CUBIC Bench in solid granite"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#1b1812]" />
            <p className="text-[12px] font-semibold tracking-[0.3em] text-[#3a362e] uppercase">
              The CUBIC Bench
            </p>
          </div>
          <h2 className="mt-6 font-noto text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-[#1b1812] sm:text-[3rem]">
            Carved from solid stone.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a453b] sm:text-lg">
            A single block of granite, hand-cut and hand-polished. No hidden
            frame, no assembly: the stone carries the stone.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4a453b] sm:text-lg">
            Every edge is finished by hand to keep the crisp line of the
            original block, never softened. The result is a seat as stable as
            the day it was made, built to stay in place through every season
            without upkeep.
          </p>

          <div className="mt-8 divide-y divide-[#e4dfd3] border-y border-[#e4dfd3] text-[15px] text-[#1b1812]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
              <span className="flex items-center gap-3">
                <Layers className="size-5 shrink-0 text-[#1b1812]" />
                Solid granite
              </span>
              <span className="hidden h-5 w-px bg-[#e4dfd3] sm:block" />
              <span className="flex items-center gap-3">
                <Box className="size-5 shrink-0 text-[#1b1812]" />
                <span className="flex items-center gap-2">
                  {DIMENSIONS.map((dim, i) => (
                    <span key={dim} className="flex items-center gap-2">
                      {dim}
                      {i < DIMENSIONS.length - 1 && (
                        <span className="h-1 w-1 rounded-full bg-[#c9791f]" />
                      )}
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 py-5">
              <Cog className="size-5 shrink-0 text-[#1b1812]" />
              Made to order — quoted individually.
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/produits" />}
              className="group cursor-pointer gap-2.5 rounded-sm bg-[#1b1812] px-8 py-6 text-[15px] font-medium tracking-wide text-[#f7f5f0] hover:bg-[#3a362e]"
            >
              View product
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="#dimensions"
              className="border-b border-[#1b1812]/40 py-2 text-[15px] font-medium text-[#1b1812] transition-colors hover:border-[#1b1812]"
            >
              See dimensions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
