"use client";

import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function useSectionNav() {
  const lenis = useLenis();
  const pathname = usePathname();

  return function onNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    const hash = href.slice(hashIndex);
    if (pathname !== path) return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -88 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}
