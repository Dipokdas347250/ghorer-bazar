"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { categories } from "@/data/products";
import { CartIcon, CloseIcon, MenuIcon, PhoneIcon, SearchIcon, UserIcon } from "./Icons";

const announcements = [
  "🚚 Free delivery on orders above ৳ 2,000",
  "💵 Cash on delivery all over Bangladesh",
  "✅ 100% pure & lab-tested products",
  "📞 Hotline: 09642-922922 (9am – 10pm)",
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-brand-400 to-brand-600 text-xl text-white shadow-md shadow-brand-500/30">
        🏠
      </span>
      <span className="leading-tight">
        <span className="block text-xl font-bold tracking-tight text-brand-800">
          Ghorer<span className="text-brand-500">Bazar</span>
        </span>
        <span className="block text-[11px] font-medium text-brand-700/70">Safe food for your family</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Announcement bar */}
      <div className="overflow-hidden bg-brand-700 text-white text-xs sm:text-sm">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap py-2">
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-6">
          <button
            className="rounded-lg p-2 text-brand-800 hover:bg-brand-50 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          <Logo />

          <form className="hidden flex-1 md:flex" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full overflow-hidden rounded-full border-2 border-brand-200 bg-brand-50 focus-within:border-brand-400">
              <input
                type="search"
                placeholder="Search for mustard oil, ghee, honey, dates…"
                className="w-full bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-brand-900/40"
              />
              <button className="flex items-center gap-2 bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600">
                <SearchIcon className="h-4 w-4" />
                Search
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-1 sm:gap-3">
            <a href="tel:09642922922" className="hidden items-center gap-2 rounded-lg px-3 py-2 text-brand-800 hover:bg-brand-50 xl:flex">
              <PhoneIcon className="h-5 w-5 text-brand-500" />
              <span className="text-left text-xs leading-tight">
                <span className="block text-brand-900/60">Call to order</span>
                <span className="font-semibold">09642-922922</span>
              </span>
            </a>
            <button className="rounded-full p-2 text-brand-800 hover:bg-brand-50" aria-label="Account">
              <UserIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="relative flex items-center gap-2 rounded-full bg-brand-500 py-2 pl-3 pr-4 text-white shadow-md shadow-brand-500/30 hover:bg-brand-600"
              aria-label="Open cart"
            >
              <CartIcon className="h-5 w-5" />
              <span className="hidden text-sm font-semibold sm:inline">Cart</span>
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1 text-[11px] font-bold text-white ring-2 ring-white">
                {count}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form className="px-4 pb-3 md:hidden" onSubmit={(e) => e.preventDefault()}>
          <div className="flex overflow-hidden rounded-full border-2 border-brand-200 bg-brand-50">
            <input type="search" placeholder="Search products…" className="w-full bg-transparent px-4 py-2 text-sm outline-none" />
            <button className="bg-brand-500 px-4 text-white" aria-label="Search">
              <SearchIcon className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Category nav */}
      <nav className="hidden border-t border-brand-100 bg-brand-50 lg:block">
        <ul className="mx-auto flex max-w-7xl items-center gap-1 px-4 text-sm font-medium text-brand-900">
          {categories.map((c) => (
            <li key={c.slug}>
              <a href={`#${c.slug}`} className="block rounded-md px-3 py-2.5 hover:bg-white hover:text-brand-600">
                {c.name}
              </a>
            </li>
          ))}
          <li className="ml-auto">
            <a href="#offers" className="block rounded-md bg-orange-500 px-3 py-1.5 text-white hover:bg-orange-600">
              🔥 Offers
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-brand-900/40" onClick={() => setMenuOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-100 p-4">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="rounded-lg p-2 hover:bg-brand-50" aria-label="Close menu">
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto p-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`#${c.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-brand-900 hover:bg-brand-50"
                  >
                    <span className="text-xl">{c.emoji}</span>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}
