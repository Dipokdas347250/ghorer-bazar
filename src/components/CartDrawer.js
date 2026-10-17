"use client";

import { useCart } from "./CartProvider";
import { formatPrice } from "@/data/products";
import { CartIcon, CloseIcon } from "./Icons";

const FREE_DELIVERY = 2000;

export default function CartDrawer() {
  const { items, setQty, subtotal, open, setOpen } = useCart();
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY ? 0 : 60;

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-brand-900/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-brand-500 px-5 py-4 text-white">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <CartIcon className="h-5 w-5" /> Your Cart
          </h2>
          <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 hover:bg-white/15" aria-label="Close cart">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {subtotal > 0 && subtotal < FREE_DELIVERY && (
          <div className="bg-brand-50 px-5 py-3 text-sm text-brand-800">
            Add <b>{formatPrice(FREE_DELIVERY - subtotal)}</b> more for free delivery!
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100">
              <div className="h-full bg-brand-500" style={{ width: `${(subtotal / FREE_DELIVERY) * 100}%` }} />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center text-brand-900/60">
              <div>
                <div className="text-6xl">🛒</div>
                <p className="mt-3 font-medium">Your cart is empty</p>
                <button onClick={() => setOpen(false)} className="mt-4 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white">
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 rounded-xl border border-brand-100 p-3">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-brand-50 text-3xl">{i.emoji}</div>
                  <div className="flex-1">
                    <p className="line-clamp-2 text-sm font-medium text-brand-900">{i.name}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-brand-200">
                        <button onClick={() => setQty(i.id, i.qty - 1)} className="px-2.5 py-0.5 text-brand-700" aria-label="Decrease">−</button>
                        <span className="min-w-6 text-center text-sm font-semibold">{i.qty}</span>
                        <button onClick={() => setQty(i.id, i.qty + 1)} className="px-2.5 py-0.5 text-brand-700" aria-label="Increase">+</button>
                      </div>
                      <span className="font-bold text-brand-600">{formatPrice(i.price * i.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-100 p-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>{delivery ? formatPrice(delivery) : "Free"}</span></div>
              <div className="flex justify-between border-t border-dashed border-brand-200 pt-2 text-base font-bold text-brand-900">
                <span>Total</span><span>{formatPrice(subtotal + delivery)}</span>
              </div>
            </div>
            <button className="mt-4 w-full rounded-full bg-brand-500 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600">
              Checkout — Cash on Delivery
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
