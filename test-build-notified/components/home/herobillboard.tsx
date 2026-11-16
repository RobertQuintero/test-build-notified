
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/herobillboard/mountain.jpg",
    title: "Slide 1",
  },
  {
    image: "/herobillboard/mountain-2.jpg",
    title: "Slide 2",
  },
  {
    image: "/herobillboard/mountain-3.jpg",
    title: "Slide 3",
  },
];

export function HeroBillboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[45dvh] md:h-[60vh] w-full overflow-hidden  px-6 md:px-10">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="aspect-video object-cover object-[center_35%]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#031a2e]/35" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center">
        <div className="text-white">
          <h1 className="text-5xl font-light tracking-tight md:text-6xl lg:text-9xl">
            2025
          </h1>
          <p className="mt-2 text-lg font-light md:text-2xl">
            Building a Stronger Future Through Innovation and Growth.
          </p>

          {/* Slide Indicators */}
            <div className="absolute bottom-14 flex items-center gap-3">
                {/* Play / Pause Button */}
                <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                    className="flex items-center justify-center text-white transition-opacity hover:opacity-80"
                >
                    {isPlaying ? (
                    // Pause Icon (Two vertical bars)
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                    ) : (
                    // Play Icon (Solid right-pointing triangle)
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                    )}
                </button>

                {/* Slide Indicator Dots */}
                <div className="flex items-center gap-2.5">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentSlide === index}
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        currentSlide === index
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/80"
                        }`}
                    />
                    ))}
                </div>
                </div>
        </div>
      </div>

    </section>
  );
}
