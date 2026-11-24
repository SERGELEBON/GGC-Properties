"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Bath,
  BedDouble,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Search,
  Heart,
  Expand,
} from "lucide-react";
import { PROPERTIES, type Property } from "@/lib/ggc-data";

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

function PropGallery({ p }: { p: Property }) {
  const [idx, setIdx] = useState(0);
  const count = p.gallery.length;
  return (
    <div className="group/g relative h-56 overflow-hidden">
      <Image
        src={p.gallery[idx]}
        alt={`${p.title} — photo ${idx + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover/g:scale-105"
      />
      {count > 1 && (
        <>
          <button
            onClick={() => setIdx((idx - 1 + count) % count)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-[#1B7DC3]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIdx((idx + 1) % count)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-black/50 text-white transition-colors hover:bg-[#1B7DC3]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {p.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
      <button
        aria-label="Add to favourites"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-white/90 text-[#C8262C] opacity-0 transition-opacity hover:bg-white group-hover/g:opacity-100"
      >
        <Heart className="h-4 w-4" />
      </button>
    </div>
  );
}

export function HomesSearch() {
  const [beds, setBeds] = useState("any");
  const [baths, setBaths] = useState("any");
  const [price, setPrice] = useState("any");
  const [keyword, setKeyword] = useState("");

  const filtered = PROPERTIES.filter((p) => {
    if (beds !== "any" && p.beds < parseInt(beds)) return false;
    if (baths !== "any" && p.baths < parseInt(baths)) return false;
    if (price === "under-200k" && p.price >= 200000) return false;
    if (price === "200k-250k" && (p.price < 200000 || p.price > 250000)) return false;
    if (price === "over-250k" && p.price <= 250000) return false;
    if (keyword && !`${p.title} ${p.location}`.toLowerCase().includes(keyword.toLowerCase()))
      return false;
    return true;
  });

  return (
    <section id="search-homes" className="relative bg-[#fafafa] py-20 lg:py-24" aria-label="Search for homes">
      <div className="rg-container">
        <div className="mb-10 text-center">
          <p className="rg-label mb-3">Search for Homes</p>
          <h2 className="rg-heading mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-[42px]">
            2, 3 &amp; 4 Bedroom Houses For Sale &amp; Rent — GGC Properties Listings
          </h2>
        </div>

        {/* Estatik-style search bar */}
        <form
          className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-3 border border-[#e1e1e1] bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]"
          aria-label="Property search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="es-keyword">Keyword</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
            <input
              id="es-keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Keyword e.g. Greenview Estate"
              className="h-12 w-full border border-[#e1e1e1] pl-9 pr-3 text-sm text-[#333] outline-none placeholder:text-[#aaa] focus:border-[#1B7DC3]"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="es-beds">Beds</label>
            <select
              id="es-beds"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="h-12 w-full border border-[#e1e1e1] bg-white px-3 text-sm text-[#333] outline-none focus:border-[#1B7DC3]"
            >
              <option value="any">Beds (any)</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div>
            <label className="sr-only" htmlFor="es-baths">Baths</label>
            <select
              id="es-baths"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="h-12 w-full border border-[#e1e1e1] bg-white px-3 text-sm text-[#333] outline-none focus:border-[#1B7DC3]"
            >
              <option value="any">Baths (any)</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div>
            <label className="sr-only" htmlFor="es-price">Price</label>
            <select
              id="es-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-12 w-full border border-[#e1e1e1] bg-white px-3 text-sm text-[#333] outline-none focus:border-[#1B7DC3]"
            >
              <option value="any">Price (any)</option>
              <option value="under-200k">Under $200,000</option>
              <option value="200k-250k">$200,000 – $250,000</option>
              <option value="over-250k">Over $250,000</option>
            </select>
          </div>
          <button type="submit" className="rg-btn h-12 justify-center !px-8 !py-0">
            Search
          </button>
        </form>

        {/* Listings grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="flex flex-col border border-[#e1e1e1] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
            >
              <PropGallery p={p} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="rg-heading mb-2 text-lg leading-snug hover:text-[#1B7DC3]">
                  <a href={`#property-${p.slug}`}>{p.title}</a>
                </h3>
                <p className="mb-3 text-lg font-bold text-[#1B7DC3]">{fmt(p.price)}</p>
                <p className="mb-4 text-sm leading-relaxed text-[#666]">{p.excerpt}</p>

                <div className="mb-4 flex items-center gap-4 border-y border-[#eee] py-3 text-sm text-[#444]">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-[#1B7DC3]" />
                    {p.beds} beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-[#1B7DC3]" />
                    {p.baths} baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="h-4 w-4 text-[#1B7DC3]" />
                    {p.area} m²
                  </span>
                </div>

                <div className="mb-4">
                  <span className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[#333]">
                    <Expand className="h-3.5 w-3.5 text-[#1B7DC3]" />
                    {fmt(p.price)}
                  </span>
                  <div>
                    {p.tags.map((t) => (
                      <a key={t} href="#search-homes" className="rg-tag hover:text-[#1B7DC3]">
                        {t}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={`#property-${p.slug}`}
                    className="rg-btn w-full justify-center !py-3"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-10 text-center text-[#666]">
            No properties match your search criteria. Try adjusting the filters.
          </p>
        )}

        <p className="mt-8 text-center text-xs uppercase tracking-widest text-[#999]">
          GGC Properties — Lands &amp; Houses — Buy • Sell • Rent
        </p>
      </div>
    </section>
  );
}
