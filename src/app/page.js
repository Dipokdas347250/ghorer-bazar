import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { CashIcon, ChevronIcon, ReturnIcon, ShieldIcon, TruckIcon, WhatsAppIcon } from "@/components/Icons";
import { categories, products } from "@/data/products";

const features = [
  { icon: TruckIcon, title: "Fast Delivery", text: "Inside Dhaka in 24 hours" },
  { icon: CashIcon, title: "Cash on Delivery", text: "Pay when you receive" },
  { icon: ShieldIcon, title: "100% Pure", text: "Lab-tested quality" },
  { icon: ReturnIcon, title: "Easy Return", text: "Hassle-free refunds" },
];

const sections = [
  { id: "mustard-oil", title: "Mustard Oil", categories: ["mustard-oil", "organic-oil"] },
  { id: "ghee", title: "Ghee & Honey", categories: ["ghee", "honey"] },
  { id: "dates", title: "Dates & Nuts", categories: ["dates", "nuts-seeds"] },
  { id: "spices", title: "Spices, Tea & Rice", categories: ["spices", "tea-coffee", "rice-pulses"] },
];

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-brand-900/60">{subtitle}</p>}
        <span className="mt-2 block h-1 w-14 rounded-full bg-brand-400" />
      </div>
      <a href="#" className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800">
        View all <ChevronIcon className="h-4 w-4" />
      </a>
    </div>
  );
}

function ProductGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default function Home() {
  const bestSellers = products.filter((p) => p.reviews > 350).slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-6">
      <HeroSlider />

      {/* Features */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-brand-100">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-600">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-900">{title}</p>
              <p className="text-xs text-brand-900/60">{text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section>
        <SectionHeader title="Shop by Category" subtitle="Everything your kitchen needs, pure and natural" />
        <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-5 sm:px-0 lg:grid-cols-10">
          {categories.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="group flex w-20 shrink-0 flex-col items-center gap-2 text-center sm:w-auto">
              <span className={`grid h-20 w-20 place-items-center rounded-full bg-linear-to-br ${c.tint} text-4xl ring-2 ring-brand-100 transition group-hover:ring-brand-400 group-hover:shadow-lg`}>
                {c.emoji}
              </span>
              <span className="text-xs font-medium text-brand-900 group-hover:text-brand-600 sm:text-sm">{c.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section id="best-sellers" className="scroll-mt-40">
        <SectionHeader title="Best Sellers" subtitle="Most loved by our customers" />
        <ProductGrid items={bestSellers} />
      </section>

      {/* Offer banners */}
      <section id="offers" className="grid scroll-mt-40 gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-brand-500 to-brand-400 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Combo Offer</p>
          <h3 className="mt-2 max-w-xs text-2xl font-bold sm:text-3xl">Family Pack — Save ৳ 500</h3>
          <p className="mt-2 max-w-xs text-sm text-white/85">Mustard oil, ghee & honey together at one special price.</p>
          <a href="#combo" className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-700">Grab the Deal</a>
          <span className="absolute -bottom-4 -right-2 text-[8rem] opacity-90">🎁</span>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-brand-100 to-cyan-50 p-8 ring-1 ring-brand-200">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Ramadan Ready</p>
          <h3 className="mt-2 max-w-xs text-2xl font-bold text-brand-900 sm:text-3xl">Premium Dates up to 15% OFF</h3>
          <p className="mt-2 max-w-xs text-sm text-brand-900/70">Ajwa, Medjool, Mariyam and more — freshly imported.</p>
          <a href="#dates" className="mt-5 inline-block rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white">Shop Dates</a>
          <span className="absolute -bottom-4 -right-2 text-[8rem]">🌴</span>
        </div>
      </section>

      {/* Category sections */}
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-40">
          {/* extra anchors so every category link in the nav lands somewhere */}
          {s.categories.slice(1).map((slug) => (
            <span key={slug} id={slug} className="block scroll-mt-40" />
          ))}
          <SectionHeader title={s.title} />
          <ProductGrid items={products.filter((p) => s.categories.includes(p.category))} />
        </section>
      ))}

      <section id="combo" className="scroll-mt-40">
        <SectionHeader title="Combo Packs" subtitle="Bundle up and save more" />
        <ProductGrid items={products.filter((p) => p.category === "combo")} />
      </section>

      {/* Why us */}
      <section className="grid items-center gap-8 rounded-3xl bg-white p-8 ring-1 ring-brand-100 md:grid-cols-2 md:p-12">
        <div>
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Why families trust GhorerBazar</h2>
          <p className="mt-3 text-brand-900/70">
            Adulterated food is a daily worry. We source directly from farmers and producers, test every batch, and
            pack with care — so you can cook with confidence.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-brand-900">
            {["Directly sourced from trusted farms", "No preservatives or artificial color", "Every batch quality-checked", "Over 2 lakh happy customers"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-[10px] text-white">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          {[["2L+", "Happy customers"], ["64", "Districts delivered"], ["50+", "Pure products"], ["4.8★", "Average rating"]].map(([n, l]) => (
            <div key={l} className="rounded-2xl bg-brand-50 p-5">
              <p className="text-3xl font-bold text-brand-600">{n}</p>
              <p className="mt-1 text-xs text-brand-900/60">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="#"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-xl hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
