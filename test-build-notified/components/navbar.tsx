"use client";
import { siteConfig } from "@/lib/siteConfig";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {

const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);
const menuButtonRef = useRef<HTMLButtonElement>(null);

// Close the mobile menu whenever the route changes
useEffect(() => {
  setIsOpen(false);
}, [pathname]);

// Close the mobile menu when the screen grows to desktop size
useEffect(() => {
  const mq = window.matchMedia("(min-width: 1024px)");
  const handler = (e: MediaQueryListEvent) => {
    if (e.matches) setIsOpen(false);
  };
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}, []);

    return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >

      {/* // Desktop Navigation */}
      <nav className="hidden px mx-auto lg:flex justify-between items-center max-w-7xl text-sm p-4 md:px-8">

        {/* Left: Brand */}
        <Link href="/" className="flex items-start gap-2 whitespace-nowrap">
          <span className="relative h-6 w-6 -bottom-2">
            {/* Blue square behind */}
            <span className="absolute -left-3 -top-3 h-6 w-6 bg-[#0875a5] z-0" />

            {/* Circle in front */}
            <span className="absolute inset-0 rounded-full border-2 border-[#6b9bb5] bg-white z-10" />
          </span>

          <span className="font-medium text-lg text-slate-700">
            The Company
          </span>
        </Link>

        {/* Center: Navigation */}
        <div className="flex h-full w-fit items-center justify-center ">
          {siteConfig.navigation &&
            Object.values(siteConfig.navigation).map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="relative flex h-full w-fit flex-col items-center justify-center text-slate-700 p-4 "
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-0 text-xs tracking-[0.2rem]">
                      ...........
                    </span>
                  )}
                </Link>
              );
            })}
        </div>

        {/* Right: Search */}
        <a
          href="/search"
          aria-label="Search"
          className="flex items-center justify-self-end text-slate-700 transition-colors hover:text-[#0875a5]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
        </a>

      </nav>

      {/* // Mobile Navigation */}
      <nav className="lg:hidden flex justify-between items-center p-8 py-6 bg-white border-b border-slate-200">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
          <span className="relative h-6 w-6 -bottom-2">
            {/* Blue square behind */}
            <span className="absolute -left-3 -top-3 h-6 w-6 bg-[#0875a5] z-0" />

            {/* Circle in front */}
            <span className="absolute inset-0 rounded-full border-2 border-[#6b9bb5] bg-white z-10" />
          </span>

          <span className="font-medium text-lg text-slate-700">
            The Company
          </span>
        </Link>

        {/* Right: Search + Menu toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/search"
            aria-label="Search"
            className="flex min-h-11 min-w-11 items-center justify-center text-slate-700 transition-colors hover:text-[#0875a5] focus-visible:ring-2 focus-visible:ring-[#0875a5]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex min-h-11 min-w-11 items-center justify-center text-slate-700 transition-colors hover:text-[#0875a5] focus-visible:ring-2 focus-visible:ring-[#0875a5]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="lg:hidden absolute left-0 top-full z-50 w-full bg-white border-b border-slate-200 shadow-sm"
      >
        <div className="flex flex-col px-4 py-2 text-sm">
          {siteConfig.navigation &&
            Object.values(siteConfig.navigation).map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="relative flex min-h-12 flex-col items-start justify-center text-slate-700 py-4 border-b border-slate-100 last:border-b-0 transition-colors hover:text-[#0875a5] focus-visible:ring-2 focus-visible:ring-[#0875a5]"
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-0 text-xs tracking-[0.2rem]">
                      ...........
                    </span>
                  )}
                </Link>
              );
            })}
        </div>
      </nav>
    </header>
  );
};