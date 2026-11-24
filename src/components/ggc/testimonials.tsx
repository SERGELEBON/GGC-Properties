"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/ggc-data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, count - perView + 1);

  const next = useCallback(() => setCurrent((c) => (c + 1) % pages), [pages]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + pages) % pages), [pages]);

  useEffect(() => {
    timer.current = setInterval(next, 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-24"
      aria-label="Testimonials"
    >
      {/* Decorative background (GGC brand tints) */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#1B7DC3]/5 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#C8262C]/5 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative rg-container">
        <div className="mb-12 text-center">
          <p className="rg-label mb-3">Testimonials</p>
          <h2 className="rg-heading text-3xl sm:text-4xl lg:text-[46px]">
            Our clients are very satisfied
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <figure className="flex h-full flex-col border border-[#e1e1e1] bg-white p-8 shadow-sm">
                    <span className="rg-quote-mark text-5xl" aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-[#555]">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4 border-t border-[#eee] pt-5">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full border-2 border-[#1B7DC3]/40 object-cover"
                      />
                      <div>
                        <p className="font-bold text-[#1f2124]">{t.name}</p>
                        <p className="text-sm text-[#999]">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[#e1e1e1] text-[#1f2124] transition-colors hover:border-[#1B7DC3] hover:bg-[#1B7DC3] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial page ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-[#1B7DC3]" : "bg-[#ccc] hover:bg-[#999]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[#e1e1e1] text-[#1f2124] transition-colors hover:border-[#1B7DC3] hover:bg-[#1B7DC3] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
