"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useSectionNav } from "@/components/use-section-nav";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.28H8v3.1h2.4V21z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "The Bench", href: "/#banc" },
  { label: "The Material", href: "/#matiere" },
  { label: "Dimensions", href: "/#dimensions" },
  { label: "About", href: "/#apropos" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const onNavClick = useSectionNav();

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <footer className="relative z-0 bg-white px-4 pt-6 pb-8 sm:px-6">
      <div className="relative z-10 mx-auto max-w-7xl rounded-3xl border border-[#2a251d] bg-[#1b1812] px-6 py-12 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="leading-none">
              <span className="block font-serif text-[11px] tracking-[0.15em] text-[#e0a860] italic">
                metre
              </span>
              <span className="mt-0.5 block text-[17px] font-semibold tracking-tight text-[#f7f5f0]">
                CUBIC
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#b7b0a0]">
              Outdoor stone furniture, built to last.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-[#f7f5f0] text-[#1b1812] transition-colors hover:bg-white"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-[#f7f5f0] text-[#1b1812] transition-colors hover:bg-white"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-semibold text-[#f7f5f0]">
              Navigation
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="group inline-flex w-fit items-center gap-1.5 text-sm text-[#b7b0a0] transition-colors hover:text-[#f7f5f0]"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#e0a860] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </span>
                <ArrowRight className="size-3 -translate-x-1 text-[#e0a860] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[13px] font-semibold text-[#f7f5f0]">Contact</p>
            <a
              href="mailto:contact@metrecubic.fr"
              className="text-sm text-[#b7b0a0] transition-colors hover:text-[#f7f5f0]"
            >
              contact@metrecubic.fr
            </a>
            <a
              href="tel:+212714602511"
              className="text-sm text-[#b7b0a0] transition-colors hover:text-[#f7f5f0]"
            >
              +212 714 602 511
            </a>
          </div>

          <div>
            <p className="text-[13px] font-semibold text-[#f7f5f0]">
              Newsletter
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b0a0]">
              Workshop news and updates, straight to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="min-w-0 flex-1 bg-transparent text-sm text-[#f7f5f0] placeholder:text-[#8a8377] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f7f5f0] text-[#1b1812] transition-colors hover:bg-white"
              >
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[13px] text-[#b7b0a0]">
            © 2026 metre CUBIC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[13px] text-[#b7b0a0] underline-offset-2 transition-colors hover:text-[#f7f5f0] hover:underline"
            >
              Legal notice
            </Link>
            <Link
              href="#"
              className="text-[13px] text-[#b7b0a0] underline-offset-2 transition-colors hover:text-[#f7f5f0] hover:underline"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="relative -z-10 mt-[-9vw] w-full overflow-hidden text-center font-noto text-[18vw] leading-none font-bold tracking-tight text-[#1b1812]/5 select-none sm:mt-[-6vw] sm:text-[13vw]"
      >
        CUBIC
      </p>

      <p className="relative m-0 border-t border-[#e4dfd3] px-5 py-4 text-center text-[11px] text-[#6b6355]/70">
        © 2026 – Designed &amp; developed by{" "}
        <a
          className="group relative inline-block py-0.5 text-[#3a362e] transition-colors duration-300 hover:text-[#c9791f]"
          href="https://www.stallionadvertising.ma/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Stallion Advertising
          <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-[#c9791f] transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
        .
      </p>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed right-6 bottom-6 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#c9791f] text-[#f7f5f0] shadow-lg transition-colors hover:bg-[#a6631a]"
      >
        <ArrowUp className="size-5" strokeWidth={2} />
      </button>
    </footer>
  );
}
