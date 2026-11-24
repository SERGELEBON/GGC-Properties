"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { PROJECT_CARDS } from "@/lib/ggc-data";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative bg-white py-20 lg:py-24" aria-label="Projects">
      <div className="rg-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rg-label mb-3">Projects</p>
            <h2 className="rg-heading text-3xl sm:text-4xl lg:text-[42px]">
              Lands &amp; Houses Across Ghana
            </h2>
            <p className="mt-2 text-lg font-light text-[#666]">Buy. Sell. Rent. — with one trusted partner</p>
          </div>
          <div className="hidden h-px w-48 self-center bg-[#e1e1e1] lg:block" aria-hidden="true" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECT_CARDS.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative block overflow-hidden border border-[#e1e1e1] bg-black"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={card.title}
            >
              <div className="relative h-[420px] w-full overflow-hidden sm:h-[460px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover dark overlay (original: black 0.4) */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                {/* Title overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-[#e9e9e9] transition-colors group-hover:text-white">
                      {card.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#1B7DC3] text-[#1B7DC3] transition-all group-hover:bg-[#1B7DC3] group-hover:text-white">
                      <MoveRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
