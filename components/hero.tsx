import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingHeading } from "@/components/typing-heading";
import heroBg from "@/app/assets/bg hero1.png";
import pic2 from "@/app/assets/pic2.png";

export function Hero() {
  return (
    <section className="relative flex min-h-[720px] w-full items-start overflow-hidden pt-24 sm:pt-32 md:min-h-screen">
      <Image
        src={heroBg}
        alt="Natural stone bench installed in a Mediterranean garden"
        fill
        priority
        placeholder="blur"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b1812]/80 via-[#1b1812]/25 to-[#1b1812]/10" />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" /> */}

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#f7f5f0]" />
            <p className="text-[12px] font-semibold tracking-[0.3em] text-white uppercase">
              Solid granite bench
            </p>
          </div>
          <h1 className="mt-6 font-noto text-[2.25rem] leading-[1.1] font-bold tracking-tight text-[#f7f5f0] sm:text-[3rem] lg:text-[3.5rem]">
            <TypingHeading
              lines={["Natural elegance", "for your public spaces."]}
            />
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white sm:text-lg">
            A robust, timeless bench crafted from solid granite, designed to
            elevate your gardens, parks and public squares.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              size="lg"
              variant="outline"
              className="group cursor-pointer gap-2.5 rounded-full border-[#f7f5f0]/70 bg-[#1b1812]/20 px-7 py-6 text-[15px] font-medium tracking-wide text-[#f7f5f0] backdrop-blur-sm hover:border-[#f7f5f0] hover:bg-[#1b1812]/35 hover:text-[#f7f5f0]"
            >
              Discover the range
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        <div className="relative size-36 overflow-hidden rounded-full ring-4 ring-[#f7f5f0]/90 lg:size-44">
          <Image
            src={pic2}
            alt="Close-up of the solid granite grain"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="max-w-40 text-center">
          <p className="text-[13px] font-semibold tracking-widest text-[#f7f5f0] uppercase">
            Solid granite
          </p>
          <p className="mt-1 text-[13px] leading-snug text-white">
            Resistant to weather, impact and time.
          </p>
        </div>
      </div>
    </section>
  );
}
