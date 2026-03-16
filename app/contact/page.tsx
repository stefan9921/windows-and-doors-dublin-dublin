import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Windows and Doors Dublin | Free Quotes",
  description: "Get in touch with Windows and Doors Dublin for a free quote. Call 087777777 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Ready to start your project? Get in touch for a free, no-obligation quote.</p>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
