import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { Metadata } from "next";
import { makeBreadcrumbSchema, makeLocalBusinessSchema, BASE_URL } from "../lib/schema";

export const metadata: Metadata = {
  title: "Contact Windows and Doors Dublin | Free Quotes",
  description: "Get in touch with Windows and Doors Dublin for a free quote on window and door installation, replacement or repair. Call 087777777 or fill out our form.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Windows and Doors Dublin | Free Quotes",
    description: "Contact us for free window and door quotes in Dublin. Call 087777777.",
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={makeLocalBusinessSchema()} />
      <JsonLd data={makeBreadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Contact", url: `${BASE_URL}/contact` },
      ])} />
      <Header />

      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Contact" }]} />
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Ready to start your project? Get in touch for a free, no-obligation quote on any window or door service in Dublin.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Get Your Free Quote</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="087 000 0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Windows Installation</option>
                  <option>Windows Replacement</option>
                  <option>Doors Installation</option>
                  <option>Doors Replacement</option>
                  <option>Window Repair</option>
                  <option>Door Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 w-full">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: "pin_drop", title: "Address", text: "UNIT 3, 4 John F Kennedy Park,\nJohn F Kennedy Industrial Estate,\nDublin 12, D12 FR82" },
                { icon: "call", title: "Phone", text: "087 777 777" },
                { icon: "mail", title: "Email", text: "windowsanddoorsdublin@gmail.com" },
                { icon: "schedule", title: "Opening Hours", text: "Mon - Fri: 8:00am - 6:00pm\nSat: 9:00am - 1:00pm\nSun: Closed" },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-background-light rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background-light p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">Service Areas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We serve all of Dublin city and suburbs, plus Swords, Tallaght, Blanchardstown, Lucan, Bray, Dún Laoghaire, Dundrum, Drogheda, Navan, Naas, Mullingar, Ashbourne, and Celbridge.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
