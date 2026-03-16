import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const serviceData: Record<string, {
  title: string; h1: string; metaTitle: string; metaDesc: string;
  heroDesc: string; overviewP1: string; overviewP2: string; overviewP3: string;
  offerings: { icon: string; title: string; desc: string }[];
}> = {
  "windows-installation": {
    title: "Windows Installation", h1: "Windows Installation Dublin",
    metaTitle: "Windows Installation Dublin | Expert Window Fitting Services",
    metaDesc: "Professional window installation in Dublin. UPVC, aluminium, sash and double glazed windows fitted by experts. Free quotes available.",
    heroDesc: "Transform your home with our premium window installation solutions. We combine Irish craftsmanship with the latest energy-efficient technology to provide lasting value and security for your property.",
    overviewP1: "At Windows and Doors Dublin, we take pride in delivering exceptional quality for every window installation project. Our windows are designed to withstand the unique Irish climate, ensuring your home remains warm, quiet, and secure throughout the year.",
    overviewP2: "We utilize advanced manufacturing techniques and the highest grade materials to offer products that don't just look great but perform exceptionally well. Whether you're looking for modern aesthetics or traditional charm, our range covers all styles.",
    overviewP3: "Our team of certified installers ensures that every fitting is perfect. We focus on airtightness and structural integrity, reducing your energy bills and increasing the overall market value of your Dublin home.",
    offerings: [
      { icon: "shield", title: "UPVC Windows", desc: "Highly durable and low-maintenance windows that offer excellent thermal insulation and value for money." },
      { icon: "door_front", title: "Sash Windows", desc: "Preserve the historical character of your home with our traditional sliding sash window designs." },
      { icon: "layers", title: "Double Glazing", desc: "Upgrade your existing windows to high-performance double glazing for superior heat retention." },
      { icon: "security", title: "Aluminium Windows", desc: "Sleek, modern aluminium frames that are incredibly strong and virtually maintenance-free." },
      { icon: "energy_savings_leaf", title: "Triple Glazing", desc: "Premium energy saving solution for those seeking the highest possible thermal performance." },
      { icon: "villa", title: "Velux & Skylights", desc: "Flood your rooms with natural light through expertly installed roof windows and skylights." },
    ],
  },
  "windows-replacement": {
    title: "Windows Replacement", h1: "Windows Replacement Dublin",
    metaTitle: "Windows Replacement Dublin | Affordable Window Upgrades",
    metaDesc: "Expert window replacement services in Dublin. Upgrade to energy-efficient double or triple glazed windows. Competitive prices, free estimates.",
    heroDesc: "Upgrade your old, draughty windows with modern, energy-efficient replacements. Our expert team handles everything from removal to installation, leaving your home looking and performing better than ever.",
    overviewP1: "Old windows can be a major source of heat loss and noise pollution. Our window replacement service addresses these issues with modern, high-performance units that dramatically improve your home's comfort and energy efficiency.",
    overviewP2: "We offer a wide range of replacement window styles and materials, including UPVC, aluminium, and timber alternatives. Each option is available in various colours and finishes to match your property's existing character.",
    overviewP3: "Our replacement process is designed to minimize disruption. Most standard window replacements can be completed within a day, and our team always leaves the area clean and tidy upon completion.",
    offerings: [
      { icon: "shield", title: "UPVC Replacements", desc: "Cost-effective and energy-efficient replacements for all window types in your home." },
      { icon: "door_front", title: "Sash Restoration", desc: "Restore and upgrade your period sash windows while maintaining their original charm." },
      { icon: "layers", title: "Double Glazing Upgrades", desc: "Replace single-pane glass with modern double glazed units for better insulation." },
      { icon: "security", title: "Window Repairs", desc: "Fix broken locks, hinges, seals, and glass without needing a full replacement." },
      { icon: "energy_savings_leaf", title: "Energy-Rated Glass", desc: "Upgrade to A-rated glazing for maximum energy efficiency and lower bills." },
      { icon: "villa", title: "Full Frame Replacement", desc: "Complete window frame and glass replacement for severely damaged or outdated units." },
    ],
  },
  "doors-installation": {
    title: "Doors Installation", h1: "Doors Installation Dublin",
    metaTitle: "Doors Installation Dublin | Composite, Sliding & French Doors",
    metaDesc: "Professional door installation in Dublin. Composite, sliding, French and patio doors supplied and fitted. Call for a free quote today.",
    heroDesc: "Enhance your home's entrance with our premium door installation service. From stunning composite front doors to elegant patio and French doors, we supply and fit doors that combine security, style, and energy efficiency.",
    overviewP1: "Your front door is the first impression visitors get of your home. At Windows and Doors Dublin, we offer an extensive range of doors that enhance both the security and curb appeal of your property.",
    overviewP2: "We specialise in composite doors, which combine the beauty of traditional timber with the strength of modern materials. Our doors come with multi-point locking systems and are available in a wide range of colours and styles.",
    overviewP3: "Whether you need internal doors supplied and fitted, a new sliding patio door, or French doors to open up your living space, our experienced team delivers precision installation every time.",
    offerings: [
      { icon: "security", title: "Composite Doors", desc: "The ultimate in front door security and aesthetics, combining multiple materials for maximum strength." },
      { icon: "door_front", title: "Internal Doors", desc: "Beautiful internal doors supplied and fitted to transform the look of your home interior." },
      { icon: "villa", title: "Patio Doors", desc: "Seamlessly connect your indoor and outdoor living spaces with our elegant patio door systems." },
      { icon: "layers", title: "French Doors", desc: "Classic double-opening doors that bring light and elegance to any room in your home." },
      { icon: "shield", title: "Sliding Doors", desc: "Space-saving sliding door solutions perfect for modern homes and extensions." },
      { icon: "energy_savings_leaf", title: "Aluminium Doors", desc: "Slim-profile aluminium doors offering maximum glass area and contemporary style." },
    ],
  },
  "doors-replacement": {
    title: "Doors Replacement", h1: "Doors Replacement & Repair Dublin",
    metaTitle: "Doors Replacement & Repair Dublin | Fast Professional Service",
    metaDesc: "Door replacement and repair services across Dublin. PVC, composite, sliding and patio door repairs. Quick turnaround, affordable prices.",
    heroDesc: "Don't put up with a worn, damaged, or draughty door. Our replacement and repair service covers all door types — from PVC and composite front doors to sliding patio doors and internal doors throughout your home.",
    overviewP1: "A damaged or poorly functioning door compromises your home's security, insulation, and appearance. Our door replacement and repair service addresses all these concerns with efficient, professional solutions.",
    overviewP2: "We repair and replace all types of doors including PVC, composite, aluminium, sliding, and patio doors. Whether it's a broken lock mechanism, damaged hinges, or a complete door replacement, we have the expertise to help.",
    overviewP3: "Our team carries a wide range of replacement parts and can often complete repairs in a single visit. For full replacements, we ensure a perfect fit and finish that exceeds your expectations.",
    offerings: [
      { icon: "shield", title: "PVC Door Repairs", desc: "Fix locks, hinges, handles and seals on all types of PVC doors quickly and affordably." },
      { icon: "security", title: "Composite Door Replacement", desc: "Upgrade to a new composite door for unbeatable security and kerb appeal." },
      { icon: "villa", title: "Patio Door Repairs", desc: "Get your sliding or patio doors running smoothly again with our repair service." },
      { icon: "layers", title: "Aluminium Door Repairs", desc: "Specialist repair and adjustment service for all aluminium door systems." },
      { icon: "door_front", title: "Lock Replacements", desc: "Upgrade or replace door locks for improved home security and peace of mind." },
      { icon: "energy_savings_leaf", title: "Draft Proofing", desc: "Seal gaps and replace worn weather strips to stop draughts and save energy." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceData[slug];
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDesc };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceData[slug];
  if (!s) notFound();

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link className="hover:text-primary" href="/">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="hover:text-primary">Services</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-bold">{s.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">{s.h1}</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">{s.heroDesc}</p>
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/30 inline-block">
              Get Free Quote Today
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Professional {s.title} Solutions</h2>
              <div className="space-y-4 text-charcoal leading-relaxed">
                <p>{s.overviewP1}</p>
                <p>{s.overviewP2}</p>
                <p>{s.overviewP3}</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl">
                <img alt={s.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxUlPyyrHsgGSL2cUaRKksCcFfv7uD2kHK9fz1gXrhkrFXGtbU5udQx-0R3kd7VadQIbyU6CZqYwpvBcMxYRcbejKOnYeeV9HuPhwlThp9pIJkf7k7WNfPs5kSPjvd9wCUAvohK_SYRp101qNP6yz7qCwBeLyxuf8fwsXNoMpOgw3fLcK4MqPMy154CV6dBaDtEmFPGhJ5khA-hRvh49598gJScQJ9mZqZGn6HPIWk0FHLjksdi50nXR1f4gpQBDbJ4a3oldE6E2c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Offerings</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {s.offerings.map(o => (
              <div key={o.title} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{o.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{o.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Simple Process</h2>
            <p className="text-slate-600">How we ensure a perfect experience from start to finish</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-primary/20 -z-10"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "1", t: "Free Consultation", d: "We visit your property to assess your needs and take initial measurements." },
                { n: "2", t: "Custom Quote", d: "Receive a transparent, itemized quote tailored to your specific requirements." },
                { n: "3", t: "Professional Installation", d: "Our expert team installs your products with minimal disruption to your home." },
                { n: "4", t: "Quality Guarantee", d: "Every project is backed by our comprehensive warranty for peace of mind." },
              ].map(step => (
                <div key={step.n} className="text-center">
                  <div className="w-20 h-20 bg-white border-4 border-primary/20 rounded-full flex items-center justify-center text-primary text-2xl font-black mx-auto mb-6 shadow-xl">{step.n}</div>
                  <h3 className="text-xl font-bold mb-3">{step.t}</h3>
                  <p className="text-slate-600 text-sm">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Get Your Free Quote Today</h2>
            <p className="text-white/80 text-lg">Join 1000+ satisfied Dublin homeowners. No obligation consultation.</p>
          </div>
          <Link href="/contact" className="bg-white text-primary hover:bg-slate-50 px-10 py-4 rounded-xl text-lg font-black transition-all shadow-xl whitespace-nowrap inline-block">
            Request a Callback
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
