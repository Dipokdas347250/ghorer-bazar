import { Logo } from "./Header";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const columns = [
  { title: "Company", links: ["About Us", "Our Story", "Careers", "Blog"] },
  { title: "Customer Care", links: ["Contact Us", "Track Order", "Return & Refund", "FAQ"] },
  { title: "Policies", links: ["Privacy Policy", "Terms & Conditions", "Delivery Policy", "Payment Policy"] },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-900 text-brand-100">
      <div className="bg-brand-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-white md:flex-row">
          <div>
            <h3 className="text-xl font-bold">Get exclusive offers in your inbox</h3>
            <p className="text-sm text-white/80">Subscribe to hear about new arrivals and seasonal deals first.</p>
          </div>
          <form className="flex w-full max-w-md overflow-hidden rounded-full bg-white p-1">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 text-sm text-brand-900 outline-none" />
            <button type="button" className="rounded-full bg-brand-800 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-900">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-block rounded-xl bg-white px-3 py-2">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm text-brand-100/70">
            We deliver safe, pure and organic food straight from trusted farms to your doorstep — anywhere in Bangladesh.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 text-brand-300" /> 09642-922922</p>
            <p className="flex items-center gap-2"><WhatsAppIcon className="h-4 w-4 text-brand-300" /> 01321-208940</p>
            <p>📍 House 12, Road 5, Dhanmondi, Dhaka</p>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-white">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-brand-100/70">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-brand-300">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-brand-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} GhorerBazar. All rights reserved.</p>
          <div className="flex gap-2">
            {["bKash", "Nagad", "Rocket", "VISA", "COD"].map((p) => (
              <span key={p} className="rounded bg-white/10 px-2 py-1 font-semibold text-white">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
