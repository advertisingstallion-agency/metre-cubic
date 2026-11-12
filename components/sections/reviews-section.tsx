import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CATEGORIES = [
  { label: "Communication", score: "4.9" },
  { label: "Responsiveness", score: "4.8" },
  { label: "Build quality", score: "4.9" },
  { label: "Value for money", score: "4.7" },
  { label: "Delivery", score: "4.8" },
];

const BREAKDOWN = [
  { stars: "5.0", count: 68, max: 68 },
  { stars: "4.0", count: 12, max: 68 },
];

const REVIEWS = [
  {
    quote:
      "A piece that's already through its second summer without a single mark. The finish is flawless and installation took less than an hour.",
    name: "S. Benali",
    role: "Landscape architect, Marrakech",
  },
  {
    quote:
      "We needed furniture that could hold up in a public park with almost no upkeep. The solid granite met every expectation.",
    name: "H. Amrani",
    role: "Parks & green spaces department",
  },
  {
    quote:
      "The follow-up was precise from the first exchange to delivery. You can feel a real artisanal standard, rare for this kind of furniture.",
    name: "L. Fontaine",
    role: "Project manager, hotel development",
  },
  {
    quote:
      "Three benches installed along the same path, and not one shows a chip or a crack a year later. Exactly the kind of low-maintenance quality we needed.",
    name: "K. Idrissi",
    role: "Facilities manager, municipal park",
  },
  {
    quote:
      "The quote was clear from day one, no surprises at delivery. The bench matches the renders down to the grain of the stone.",
    name: "M. Rahal",
    role: "Urban planner, Casablanca",
  },
  {
    quote:
      "We compared several suppliers and this was the only one confident enough to guarantee ten years on the stone. So far, it shows.",
    name: "A. Chraibi",
    role: "Director of public spaces",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? "fill-[#e0a760] text-[#e18b13]"
              : "fill-transparent text-[#d8d0bd]"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="w-full px-6 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#e0a760]" />
          <p className="text-[12px] font-semibold tracking-[0.3em] text-[#e18b13] uppercase">
            Testimonials
          </p>
        </div>
        <h2 className="mt-6 max-w-2xl font-serif text-[2.5rem] leading-[1.1] font-normal tracking-tight text-[#1a1811] sm:text-[3rem]">
          Public organizations that
          <br />
          <span className="text-[#e18b13] italic">trust us.</span>
        </h2>

        <div className="mt-14 rounded-sm border border-[#e4dfd3] bg-[#f7f5f0] p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1px_1fr] sm:items-center">
            <div>
              <p className="font-noto text-6xl font-bold tracking-tight text-[#1a1811]">
                4.9
              </p>
              <div className="mt-3">
                <Stars rating={5} />
              </div>
              <p className="mt-2 text-sm text-[#6b6355]">80 reviews</p>
            </div>

            <span className="hidden h-24 bg-[#e4dfd3] sm:block" />

            <div className="flex flex-col gap-3">
              {BREAKDOWN.map((row) => (
                <div key={row.stars} className="flex items-center gap-4">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e4dfd3]">
                    <div
                      className="h-full rounded-full bg-[#e18b13]"
                      style={{ width: `${(row.count / row.max) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-sm font-semibold text-[#1a1811]">
                    {row.stars}
                  </span>
                  <span className="w-20 shrink-0 text-sm text-[#6b6355]">
                    {row.count} reviews
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e4dfd3] pt-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="rounded-sm border border-[#e4dfd3] bg-white px-4 py-2.5 text-sm text-[#3a362e]"
              >
                <span className="font-semibold text-[#e18b13]">
                  {cat.score}
                </span>{" "}
                {cat.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14">
          <Carousel opts={{ align: "start", loop: true }}>
            <div className="flex items-center justify-between gap-3 border-t border-[#e4dfd3] pt-8">
              <p className="text-[12px] font-semibold tracking-[0.25em] text-[#6b6355] uppercase">
                In their own words
              </p>
              <div className="flex items-center gap-3">
                <CarouselPrevious className="static translate-x-0 translate-y-0 border-[#e4dfd3] text-[#1a1811] hover:bg-[#f0ece1]" />
                <CarouselNext className="static translate-x-0 translate-y-0 border-[#e4dfd3] text-[#1a1811] hover:bg-[#f0ece1]" />
              </div>
            </div>

            <CarouselContent className="-ml-6 mt-8">
              {REVIEWS.map((review) => (
                <CarouselItem
                  key={review.name}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-[#e4dfd3] bg-[#f7f5f0] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e0a760]/50 hover:shadow-[0_24px_48px_-28px_rgba(27,24,18,0.35)]">
                    <Quote
                      className="absolute -top-2 right-5 size-16 text-[#1a1811]/4 transition-colors duration-300 group-hover:text-[#e0a760]/10"
                      strokeWidth={0}
                      fill="currentColor"
                    />
                    <div className="relative flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f0ece1] font-noto text-sm font-semibold text-[#e0a760] ring-1 ring-[#e4dfd3]">
                        {review.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#1a1811]">
                          {review.name}
                        </p>
                        <p className="text-[13px] text-[#6b6355]">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-5">
                      <Stars rating={5} />
                    </div>
                    <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-[#3a362e]">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
