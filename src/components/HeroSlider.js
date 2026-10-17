"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    tag: "Winter Special",
    title: "Pure Ghani-Pressed Mustard Oil",
    text: "Cold-pressed in traditional wooden ghani. No chemicals, no mixing — just the real taste of home.",
    cta: "Shop Mustard Oil",
    href: "#mustard-oil",
    emoji: "🫙",
    bg: "from-brand-100 via-brand-50 to-white",
  },
  {
    tag: "Up to 20% OFF",
    title: "Premium Gawa Ghee, Made the Old Way",
    text: "Slow-cooked from fresh cow milk cream for a rich aroma your family will love.",
    cta: "Shop Ghee",
    href: "#ghee",
    emoji: "🧈",
    bg: "from-sky-200 via-brand-50 to-white",
  },
  {
    tag: "Fresh Arrival",
    title: "Sundarban Natural Honey",
    text: "Collected straight from the mangrove forest. Raw, unprocessed and full of goodness.",
    cta: "Shop Honey",
    href: "#honey",
    emoji: "🍯",
    bg: "from-cyan-100 via-brand-50 to-white",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-3xl shadow-sm ring-1 ring-brand-100">
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s) => (
          <div key={s.title} className={`w-full shrink-0 bg-linear-to-br ${s.bg}`}>
            <div className="grid items-center gap-6 px-6 py-10 sm:px-12 md:grid-cols-2 md:py-14">
              <div>
                <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {s.tag}
                </span>
                <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-900 sm:text-4xl lg:text-5xl">{s.title}</h1>
                <p className="mt-4 max-w-md text-brand-900/70">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={s.href} className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600">
                    {s.cta}
                  </a>
                  <a href="#best-sellers" className="rounded-full border-2 border-brand-300 bg-white/70 px-6 py-3 font-semibold text-brand-700 hover:border-brand-500">
                    Best Sellers
                  </a>
                </div>
              </div>
              <div className="relative mx-auto hidden aspect-square w-full max-w-sm place-items-center md:grid">
                <div className="absolute inset-6 rounded-full bg-brand-300/30 blur-2xl" />
                <div className="absolute inset-10 rounded-full border-4 border-dashed border-brand-300/60" />
                <span className="relative text-[9rem] drop-shadow-xl">{s.emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-brand-500" : "w-2.5 bg-brand-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
