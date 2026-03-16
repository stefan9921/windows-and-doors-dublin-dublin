import Header from "./components/Header";
import Footer from "./components/Footer";
import CTABanner from "./components/CTABanner";
import Link from "next/link";

const services = [
  { icon: "window", title: "Windows Installation", desc: "Expert fitting for new builds and extensions with energy-efficient glass.", slug: "windows-installation" },
  { icon: "build", title: "Windows Replacement", desc: "Professional upgrade of old units to modern double or triple glazing.", slug: "windows-replacement" },
  { icon: "meeting_room", title: "Doors Installation", desc: "Enhanced security and style for your main entrance or patio doors.", slug: "doors-installation" },
  { icon: "door_sensor", title: "Doors Replacement", desc: "Durable and modern door solutions for increased thermal performance.", slug: "doors-replacement" },
];

const areas = [
  { name: "Swords", slug: "swords" }, { name: "Tallaght", slug: "tallaght" }, { name: "Naas", slug: "naas" },
  { name: "Blanchardstown", slug: "blanchardstown" }, { name: "Lucan", slug: "lucan" }, { name: "Bray", slug: "bray" },
  { name: "Dundrum", slug: "dundrum" }, { name: "Drogheda", slug: "drogheda" }, { name: "Dún Laoghaire", slug: "dun-laoghaire" },
];

const whyUs = [
  { icon: "sell", title: "Free Quotes", desc: "Transparent pricing with no obligation. We visit your site and provide honest estimates." },
  { icon: "engineering", title: "Expert Installation", desc: "Our team consists of skilled professionals you can trust to treat your home with care." },
  { icon: "workspace_premium", title: "Quality Materials", desc: "Sourced from leading manufacturers to ensure longevity and maximum performance." },
  { icon: "trending_down", title: "Competitive Prices", desc: "The best value for premium service. We offer high-quality results at affordable rates." },
];

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-soft to-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-primary/20 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">15 Years of Excellence</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Professional <span className="relative">Windows<span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10"></span></span> and Doors in Dublin
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Expert installation and repair services across the greater Dublin area. Upgrade your home&apos;s security and energy efficiency with high-quality materials and professional craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  Request Quote <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/services/windows-installation" className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-100">
                <img alt="Modern House Windows" className="rounded-xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh_aepfymlxmPBRxKIlqBTZEOCiEg6mwkBMbizK1zF0RWQUj_ridmX5a3xCaTV7mZEHRs8tWGxzENP8xKXUn4OTRhx2r3lAb0EckkTZF-9WRnF2vezkq0eOnhC4QmwSdetIdZhBI2zX-zuYxJvnmGrvFQ1gNuI9mEJUC9Ukw7RRpVWAMwBwou91wu1dUS5Rxim-OjB0mTQjec3CzGOYiXc1rB2pPjpCGi-oj-6NM5bRu96Yf8MoR1fesObsC2Bdu_KT7FtWu_-mB8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(s => (
              <div key={s.slug} className="group bg-background-light p-8 rounded-2xl border border-transparent hover:border-primary/30 transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href={`/services/${s.slug}`}>
                  Learn More <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-accent-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Choose Us</h2>
              <p className="text-slate-600">We pride ourselves on delivering excellence in every project, combining traditional craftsmanship with modern technology.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">{w.icon}</span>
                <h4 className="text-lg font-bold mb-2">{w.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Areas We Serve</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">We provide rapid response times and expert window and door services across the entire Dublin region and surrounding counties.</p>
              <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg border border-primary/20">Plus all of Dublin city &amp; suburbs</div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map(a => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="flex items-center gap-3 p-4 bg-background-light rounded-lg hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-medium">{a.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
