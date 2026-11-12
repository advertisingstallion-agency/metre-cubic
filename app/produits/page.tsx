import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductDetail } from "@/components/sections/product-detail";

export const metadata: Metadata = {
  title: "Products — metre CUBIC",
  description:
    "The CUBIC Bench in solid granite, available in three finishes and three sizes.",
};

export default function ProduitsPage() {
  return (
    <>
      <Header forceSolid />
      <main className="bg-white pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28 lg:px-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#1b1812]" />
            <p className="text-[12px] font-semibold tracking-[0.3em] text-[#3a362e] uppercase">
              Products
            </p>
          </div>
          <h1 className="mt-6 max-w-2xl font-noto text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-[#1b1812] sm:text-[3rem]">
            One bench. Three finishes. Three sizes.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a453b] sm:text-lg">
            The CUBIC Bench remains the same original block of solid granite
            — choose the finish and size suited to your space.
          </p>

          <ProductDetail />
        </div>
      </main>
      <Footer />
    </>
  );
}
