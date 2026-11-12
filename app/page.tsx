import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ProductSection } from "@/components/sections/product-section";
import { MaterialSection } from "@/components/sections/material-section";
import { DimensionsSection } from "@/components/sections/dimensions-section";
import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Reveal>
        <ProductSection />
      </Reveal>
      <Reveal>
        <MaterialSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <DimensionsSection />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Footer />
    </>
  );
}
