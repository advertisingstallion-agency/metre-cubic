"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSectionNav } from "@/components/use-section-nav";

const NAV_LINKS = [
  { label: "The Bench", href: "/#banc" },
  { label: "Products", href: "/produits" },
  { label: "The Material", href: "/#matiere" },
  { label: "Dimensions", href: "/#dimensions" },
  { label: "About", href: "/#apropos" },
];

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function Logo({ scrolled }: { scrolled: boolean }) {
  const inkFill = scrolled ? "#1B1812" : "#F7F5F0";
  const textColor = scrolled ? "text-[#1b1812]" : "text-[#f7f5f0]";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 26 26"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
      >
        <path d="M13 1 24 7.5 13 14 2 7.5Z" fill={inkFill} />
        <path d="M2 7.5 13 14V25L2 18.5Z" fill={inkFill} fillOpacity="0.85" />
        <path d="M24 7.5 13 14V25L24 18.5Z" fill="#E0A860" />
      </svg>
      <span className="leading-none">
        <span className="block font-serif text-[10px] tracking-[0.15em] text-[#e0a860] italic sm:text-[11px]">
          metre
        </span>
        <span
          className={`mt-0.5 block text-[15px] font-semibold tracking-tight transition-colors duration-300 sm:text-[17px] ${textColor}`}
        >
          CUBIC
        </span>
      </span>
    </Link>
  );
}

function MobileMenu({
  scrolled,
  onNavClick,
}: {
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={`group size-8 md:hidden ${
            scrolled
              ? "text-[#1b1812] hover:bg-[#1b1812]/10"
              : "text-[#f7f5f0] hover:bg-white/10 hover:text-[#f7f5f0]"
          }`}
          size="icon"
          variant="ghost"
        >
          <svg
            className="pointer-events-none"
            fill="none"
            height={16}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-48 rounded-sm border-[#e4dfd3] bg-[#f7f5f0] p-1 md:hidden"
      >
        <NavigationMenu className="max-w-none *:w-full">
          <NavigationMenuList className="flex-col items-start gap-0">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem className="w-full" key={link.href}>
                <NavigationMenuLink
                  className="rounded-none py-2 text-[15px] font-medium text-[#3a362e] hover:bg-[#eeeade] hover:text-[#1b1812]"
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  );
}

export function Header({ forceSolid = false }: { forceSolid?: boolean } = {}) {
  const scrolledState = useScrolled();
  const scrolled = forceSolid || scrolledState;
  const onNavClick = useSectionNav();

  const navLinkClass = scrolled
    ? "relative bg-transparent px-3 py-2 text-[15px] font-medium text-[#3a362e] transition-colors duration-300 after:absolute after:inset-x-3 after:-bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#1b1812] after:transition-transform after:duration-300 hover:bg-transparent hover:text-[#1b1812] hover:after:scale-x-100"
    : "relative bg-transparent px-3 py-2 text-[15px] font-medium text-white transition-colors duration-300 after:absolute after:inset-x-3 after:-bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:bg-transparent hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#e4dfd3] bg-white"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div>
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-2.5 md:gap-4 md:px-6 md:py-3">
          <div className="flex items-center gap-3">
            <MobileMenu scrolled={scrolled} onNavClick={onNavClick} />
            <Logo scrolled={scrolled} />
          </div>
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-3">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    className={navLinkClass}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Link
              href="/#contact"
              onClick={(e) => onNavClick(e, "/#contact")}
              className={`rounded-sm border px-3 py-2 text-[12px] font-medium tracking-wide transition-colors duration-300 sm:px-4 sm:py-2.5 sm:text-[13px] ${
                scrolled
                  ? "border-[#1b1812] text-[#1b1812] hover:bg-[#1b1812] hover:text-[#f7f5f0]"
                  : "border-[#f7f5f0]/50 text-[#f7f5f0] hover:border-[#f7f5f0] hover:bg-[#f7f5f0]/10"
              }`}
            >
              <span className="sm:hidden">Contact</span>
              <span className="hidden sm:inline">Contact us</span>
            </Link>
            <Link
              href="/produits"
              className={`rounded-sm px-3 py-2 text-[12px] font-medium tracking-wide transition-colors duration-300 sm:px-4 sm:py-2.5 sm:text-[13px] ${
                scrolled
                  ? "bg-[#1b1812] text-[#f7f5f0] hover:bg-[#3a362e]"
                  : "bg-[#f7f5f0] text-[#1b1812] hover:bg-white"
              }`}
            >
              <span className="sm:hidden">Product</span>
              <span className="hidden sm:inline">View product</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
