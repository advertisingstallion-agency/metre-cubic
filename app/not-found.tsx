import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Page not found — metre CUBIC",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen items-center overflow-hidden bg-[#1b1812] px-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(224,168,96,0.08)_1px,transparent_1px)] bg-size-[26px_26px]"
        />

        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start py-32">
          <p className="font-noto text-8xl font-bold tracking-tight text-[#e0a860] sm:text-9xl">
            404
          </p>
          <h1 className="mt-6 font-noto text-[2rem] leading-[1.1] font-bold tracking-tight text-[#f7f5f0] sm:text-[2.5rem]">
            This page has been left in the quarry.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#b7b0a0] sm:text-lg">
            The page you&rsquo;re looking for doesn&rsquo;t exist, or has
            moved. Let&rsquo;s get you back to solid ground.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/"
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#e0a860] px-8 py-3.5 text-[13px] font-semibold tracking-[0.15em] text-[#1b1812] uppercase transition-colors hover:bg-[#c9791f]"
            >
              Back home
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#contact"
              className="border-b border-[#f7f5f0]/40 py-2 text-[15px] font-medium text-[#f7f5f0] transition-colors hover:border-[#f7f5f0]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
