"use client";
import { siteConfig } from "@/lib/siteConfig";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

const pathname = usePathname();

    return (
    <header className="relative w-full bg-white ">

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
            Object.values(siteConfig.navigation).map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
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
    </header>
  );
};


