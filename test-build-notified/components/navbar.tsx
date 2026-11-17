"use client";
import { siteConfig } from "@/lib/siteConfig";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {

const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
const menuButtonRef = useRef<HTMLButtonElement>(null);

// Close the mobile menu whenever the route changes
useEffect(() => {
  setIsOpen(false);
  setOpenDropdown(null);
}, [pathname]);

// Close the mobile menu when the screen grows to desktop size
useEffect(() => {
  const mq = window.matchMedia("(min-width: 1024px)");
  const handler = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setIsOpen(false);
      setOpenDropdown(null);
    }
  };
  mq.addEventListener("change", handler);
  return () => mq.removeEventListener("change", handler);
}, []);

    return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      onKeyDown={(event) => {
        if (event.key === "Escape" && (isOpen || openDropdown)) {
          setIsOpen(false);
          setOpenDropdown(null);
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
          {Object.entries(siteConfig.navigation).map(([key, item]) => {
            const isActive = "href" in item && pathname === item.href;
            const isDropdownOpen = openDropdown === key;

            return (
              <div
                key={key}
                className="relative flex h-full items-center"
                onMouseEnter={() => item.children.length > 0 && setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node | null,
                    )
                  ) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {"href" in item ? (
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className="relative flex h-full w-fit items-center justify-center p-4 text-slate-700"
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 text-xs tracking-[0.2rem]">
                        ...........
                      </span>
                    )}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-controls={`desktop-dropdown-${key}`}
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : key)
                      }
                      onFocus={() => setOpenDropdown(key)}
                      className="flex h-full items-center justify-center gap-1 p-4 text-slate-700 focus-visible:ring-2 focus-visible:ring-[#0875a5]"
                    >
                      {item.label}
                      <svg
                        aria-hidden="true"
                        className={`h-3 w-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="m3 4.5 3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                    <div
                      id={`desktop-dropdown-${key}`}
                      hidden={!isDropdownOpen}
                      className="absolute left-0 top-full z-50 min-w-60 border-t-2 border-[#0875a5] bg-white py-2 shadow-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0875a5] focus-visible:bg-slate-50 focus-visible:text-[#0875a5]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
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
          {Object.entries(siteConfig.navigation).map(([key, item]) => {
            const isActive = "href" in item && pathname === item.href;
            const isDropdownOpen = openDropdown === key;

            return (
              <div
                key={key}
                className="border-b border-slate-100 last:border-b-0"
              >
                <div className="flex min-h-12 items-center">
                  {"href" in item ? (
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="flex min-h-12 flex-1 items-center py-3 text-slate-700 transition-colors hover:text-[#0875a5] focus-visible:ring-2 focus-visible:ring-[#0875a5]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-controls={`mobile-dropdown-${key}`}
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : key)
                      }
                      className="flex min-h-12 w-full items-center justify-between py-3 text-left text-slate-700 focus-visible:ring-2 focus-visible:ring-[#0875a5]"
                    >
                      {item.label}
                      <svg
                        aria-hidden="true"
                        className={`h-3 w-3 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="m3 4.5 3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children.length > 0 && (
                  <div
                    id={`mobile-dropdown-${key}`}
                    hidden={!isDropdownOpen}
                    className="border-l-2 border-[#0875a5] pb-2 pl-4"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block min-h-11 py-3 text-sm text-slate-600 transition-colors hover:text-[#0875a5] focus-visible:ring-2 focus-visible:ring-[#0875a5]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};