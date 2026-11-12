"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "How long does it take to receive my bench?",
    answer:
      "Allow 4 to 6 weeks between order and delivery: every piece is cut and polished on demand, never made in advance.",
  },
  {
    question: "Does the bench withstand the weather?",
    answer:
      "Yes. Solid granite handles frost, rain and UV without any special treatment. It's built to stay outdoors year-round.",
  },
  {
    question: "Do you offer custom dimensions?",
    answer:
      "Standard dimensions suit most projects, but we're happy to look into a custom version for multi-piece orders.",
  },
  {
    question: "How does installation work?",
    answer:
      "The bench is delivered as a single piece, ready to place. No fixing is needed thanks to its weight, unless the site requires it.",
  },
  {
    question: "What maintenance does natural stone need?",
    answer:
      "A rinse with clean water once or twice a year is enough. The stone doesn't fade and needs no surface treatment.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#e4dfd3]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`font-noto text-lg font-semibold transition-colors sm:text-xl ${
            isOpen ? "text-[#1b1812]" : "text-[#3a362e]"
          }`}
        >
          {question}
        </span>
        <Plus
          className={`size-5 shrink-0 text-[#c9791f] transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          strokeWidth={1.75}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-[#6b6355]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="w-full px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1b1812]" />
              <p className="text-[12px] font-semibold tracking-[0.3em] text-[#3a362e] uppercase">
                Frequently asked questions
              </p>
            </div>
            <h2 className="mt-6 max-w-sm font-noto text-[2.25rem] leading-[1.1] font-bold tracking-tight text-[#1b1812] sm:text-[2.75rem]">
              Everything to know before ordering.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#6b6355]">
              Can&rsquo;t find your question here?{" "}
              <a
                href="#contact"
                className="font-medium text-[#1b1812] underline decoration-[#c9791f] decoration-2 underline-offset-4 transition-colors hover:text-[#c9791f]"
              >
                Get in touch directly
              </a>
              .
            </p>
          </div>

          <div className="border-t border-[#e4dfd3]">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
