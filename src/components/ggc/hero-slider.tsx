"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/ggc-data";

function Letters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={`${i}-${ch}`}
          className="rg-letter"
          style={{ animationDelay: `${offset + i * 0.035}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = HERO_SLIDES.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + count) % count);
      setAnimKey((k) => k + 1);
    },
    [count]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % count);
      setAnimKey((k) => k + 1);
    }, 8000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [count]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative h-[92vh] min-h-[540px] w-full overflow-hidden bg-black"
      aria-label="Featured properties slideshow"
      aria-roledescription="carousel"
    >
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          aria-hidden={idx !== current}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover ${idx === current ? "rg-kenburns" : ""}`}
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        </div>
      ))}

      {/* Slide content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="rg-container w-full">
          <div className="max-w-2xl text-white" key={animKey}>
            {slide.brand && (
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[4px] text-white/90">
                <span className="rg-fade-up inline-block">{slide.brand}</span>
              </p>
            )}
            {slide.titleLines && (
              <h2 className="rg-heading text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                {slide.titleLines.map((line, li) => (
                  <span key={li} className="block">
                    <Letters text={line} offset={0.15 + li * 0.35} />
                  </span>
                ))}
              </h2>
            )}
            {slide.text && (
              <p className="rg-fade-up mt-5 max-w-xl text-base font-light text-white/90 sm:text-lg" style={{ animationDelay: "0.9s" }}>
                {slide.text}
              </p>
            )}
            {slide.button && (
              <div className="rg-fade-up mt-8" style={{ animationDelay: "1.1s" }}>
                <Link href={slide.button.href} className="rg-btn">
                  {slide.button.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:border-[#1B7DC3] hover:bg-[#1B7DC3] sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:border-[#1B7DC3] hover:bg-[#1B7DC3] sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bullets */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              idx === current ? "w-8 rounded-sm bg-[#1B7DC3]" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
