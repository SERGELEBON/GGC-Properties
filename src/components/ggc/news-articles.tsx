"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { ARTICLES } from "@/lib/ggc-data";

export function NewsArticles() {
  return (
    <section id="news" className="relative bg-white py-20 lg:py-24" aria-label="News and articles">
      <div className="rg-container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="rg-label mb-3">News</p>
            <h2 className="rg-heading text-3xl sm:text-4xl">
              Lands &amp; Houses In Ghana <span className="text-[#1B7DC3]">&amp;</span> Tips &amp; Resources
            </h2>
          </div>
          <Link href="#news" className="rg-btn">
            View All
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col border border-[#e1e1e1] bg-white transition-shadow hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
            >
              <a href={a.href} className="relative block h-64 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                  {a.categories.map((c) => (
                    <span
                      key={c}
                      className="bg-[#1B7DC3] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-wide text-[#999]">
                  {a.date} <span className="mx-1">|</span> By {a.author}
                </p>
                <h3 className="rg-heading mt-3 flex-1 text-lg leading-snug">
                  <a href={a.href} className="transition-colors hover:text-[#1B7DC3]">
                    {a.title}
                  </a>
                </h3>
                <span className="mt-5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#1B7DC3]">
                  Read More
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
