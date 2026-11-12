"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="bg-[#1b1812] py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#e0a860]" />
          <p className="text-[12px] font-semibold tracking-[0.3em] text-[#e0a860] uppercase">
            Contact
          </p>
        </div>
        <h2 className="mt-4 max-w-2xl font-noto text-[2.25rem] leading-[1.1] font-bold tracking-tight text-[#f7f5f0] sm:text-[2.75rem]">
          Got a question? Get in touch
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[#3a362e] py-2 sm:flex-row">
            <label
              htmlFor="contact-name"
              className="shrink-0 text-lg text-[#f7f5f0] sm:text-xl"
            >
              Hi, my name is
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="min-w-0 flex-1 bg-transparent text-lg text-[#f7f5f0] placeholder:text-[#6b6355] focus:outline-none sm:text-xl"
            />
          </div>

          <div className="mt-5 flex flex-col flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[#3a362e] py-2 sm:flex-row">
            <label
              htmlFor="contact-email"
              className="shrink-0 text-lg text-[#f7f5f0] sm:text-xl"
            >
              You can reach me at
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 bg-transparent text-lg text-[#f7f5f0] placeholder:text-[#6b6355] focus:outline-none sm:text-xl"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="block text-[12px] font-semibold tracking-[0.2em] text-[#e0a860] uppercase"
            >
              My message
            </label>
            <textarea
              id="contact-message"
              required
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              className="mt-2 w-full resize-none border-b border-[#3a362e] bg-transparent pb-2 text-lg text-[#f7f5f0] placeholder:text-[#6b6355] focus:outline-none sm:text-xl"
            />
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#e0a860] px-8 py-3.5 text-[13px] font-semibold tracking-[0.15em] text-[#1b1812] uppercase transition-colors hover:bg-[#c9791f]"
          >
            Send
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#3a362e] pt-5 text-sm text-[#b7b0a0]">
          <a
            href="mailto:contact@metrecubic.fr"
            className="flex items-center gap-2 transition-colors hover:text-[#f7f5f0]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            contact@metrecubic.fr
          </a>
          <a
            href="tel:+212714602511"
            className="flex items-center gap-2 transition-colors hover:text-[#f7f5f0]"
          >
            <Phone className="size-4" strokeWidth={1.75} />
            +212 714 602 511
          </a>
        </div>
      </div>
    </section>
  );
}
