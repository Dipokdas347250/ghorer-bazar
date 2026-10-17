"use client";

import { useCart } from "./CartProvider";
import { categoryBySlug, formatPrice } from "@/data/products";
import { CartIcon, StarIcon } from "./Icons";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const off = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const tint = categoryBySlug[product.category]?.tint ?? "from-brand-100 to-white";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 hover:ring-brand-300">
      <div className={`relative grid aspect-square place-items-center bg-linear-to-br ${tint}`}>
        <span className="text-7xl transition duration-300 group-hover:scale-110 sm:text-8xl">{product.emoji}</span>
        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-2 py-0.5 text-xs font-bold text-white">-{off}%</span>
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold leading-snug text-brand-900 sm:text-[15px]">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-1 text-xs text-brand-900/60">
          <StarIcon className="h-3.5 w-3.5 text-amber-400" />
          <span className="font-semibold text-brand-900">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-brand-600">{formatPrice(product.price)}</span>
          <span className="text-sm text-brand-900/40 line-through">{formatPrice(product.oldPrice)}</span>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-3">
          <button
            onClick={() => add(product)}
            className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-brand-500 py-2 text-xs font-semibold text-brand-600 hover:bg-brand-50 sm:text-sm"
          >
            <CartIcon className="h-4 w-4" />
            Add
          </button>
          <button
            onClick={() => add(product)}
            className="rounded-lg bg-brand-500 py-2 text-xs font-semibold text-white hover:bg-brand-600 sm:text-sm"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}
