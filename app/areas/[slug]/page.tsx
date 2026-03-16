import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const allAreas = [
  { name: "Swords", slug: "swords" },
  { name: "Naas", slug: "naas" },
  { name: "Navan", slug: "navan" },
  { name: "Mullingar", slug: "mullingar" },
  { name: "Tallaght", slug: "tallaght" },
  { name: "Drogheda", slug: "drogheda" },
  { name: "Lucan", slug: "lucan" },
  { name: "Bray", slug: "bray" },
  { name: "Dún Laoghaire", slug: "dun-laoghaire" },
  { name: "Ashbourne", slug: "ashbourne" },
  { name: "Blanchardstown", slug: "blanchardstown" },
  { name: "Dundrum", slug: "dundrum" },
  { name: "Celbridge", slug: "celbridge" },
];

const services = [
  { icon: "window", title: "Windows Installation", slug: "windows-installation", desc: "Expert fitting of high-quality, energy-efficient windows tailored to your home." },
  { icon: "autorenew", title: "Windows Replacement", slug: "windows-replacement", desc: "Upgrade your old windows with modern, secure, and draught-proof solutions." },
  { icon: "door_front", title: "Doors Installation", slug: "doors-installation", desc: "Beautiful entryways that provide maximum security and curb appeal." },
  { icon: "meeting_room", title: "Doors Replacement", slug: "doors-replacement", desc: "Replace worn-out doors with our durable and stylish composite or PVC range." },
];

export async function generateStaticParams() {
  return allAreas.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = allAreas.find(a => a.slug === slug);
  if (!area) return {};
  return {
    title: `Windows and Doors ${area.name} | Installation & Replacement`,
    description: `Professional windows and doors installation, replacement and repair in ${area.name}. Serving ${area.name} and surrounding areas. Free quotes — call 087777777.`,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = allAreas.find(a => a.slug === slug);
  if (!area) notFound();
  const otherAreas = allAreas.filter(a => a.slug !== slug);

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="bg-soft-violet py-12 lg:py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link className="hover:text-primary" href="/">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="hover:text-primary">Areas</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-medium">{area.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                Windows and Doors <span className="text-primary">{area.name}</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 max-w-lg">
                Professional installation, replacement and repair in {area.name} and surrounding areas. Trusted local expertise with premium materials.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all inline-block">
                  Get Free Quote Today
                </Link>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-medium">10 Year Guarantee</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-full h-[400px] rounded-2xl bg-slate-300 overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt={`Windows and doors in ${area.name}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75kYAZ4NZsRVenEHQvbbsF3Za7mby-ZJtY4teLomFMiSnc2O7r0C4uCa8tU-_beWS9U5VXQGa0f5ooWDaldOOjFR8_U24yoWu7Z9F2pwoiCtMwCLykzpLc8E_vyxwyt47jeRbgHOiCDe4MBWr0IzuW8TS6_35g8dho0D910NzXPdcFMM61B_aYaLGl1mVsP_h0wgIC12luEpocb9mnEEYI_2c3Kgldn8TpglP3QoytHG7Mm7nebk9lS8rrd3As0KJS7kFyYVpabg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Area Service */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-charcoal leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-900 pb-2">Expert Solutions in {area.name}</h2>
            <p>At Windows and Doors Dublin, we take immense pride in serving the {area.name} community with top-tier glazing and entry solutions. Our team understands the specific architectural styles prevalent in {area.name}, from classic heritage homes to modern developments, ensuring every installation complements your property&apos;s unique character.</p>
            <p>We specialize in high-performance uPVC and aluminum systems designed to withstand the Irish climate. Whether you&apos;re looking to reduce your energy bills with triple-glazed windows or enhance your home&apos;s security with a reinforced composite door, our local technicians provide precision craftsmanship that lasts a lifetime.</p>
            <p>Being local to {area.name} means we can offer rapid site surveys and personalized consultations at your convenience. We don&apos;t just fit windows; we provide peace of mind through a comprehensive service that includes everything from initial design advice to final safety checks and a robust aftercare program.</p>
          </div>
          <div className="rounded-xl overflow-hidden bg-slate-200 aspect-square">
            <img className="w-full h-full object-cover" alt={`Interior with quality windows in ${area.name}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuATzZfhxmGhSjCelhzmBaw8_1SwBmHcko2pLZzd0Qu4di8QktlVtFZR3W4XfSu9QY3jlExUGqYDRbZa3PMFpf7Xe5Jzz95IdKRRQj9xtGlwwtsN8q_iOm_0bANryh9qELc4xu46GamIY1A9oit1pSpqyA4xxm4ERtmbhBsyiFJZgYJhcx-Seoabu4vYW0bCd4__Zj9yVO6wZpt4Xuel7etG6IWxUJ4rVllvNEOd3__BVOKukxo0Tq56mLiqysJ-FDUUcg-Dtt_nggc" />
          </div>
        </div>
      </section>

      {/* Services in Area */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services in {area.name}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(sv => (
              <div key={sv.slug} className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">{sv.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{sv.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{sv.desc}</p>
                <Link className="text-primary font-bold text-sm inline-flex items-center gap-1" href={`/services/${sv.slug}`}>
                  Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="bg-soft-violet py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose a Local Dublin Company?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "timer", title: "Quick Response Times", desc: `Based nearby, we can provide faster quotes and more efficient installation timelines for ${area.name} residents.` },
              { icon: "location_city", title: "Local Knowledge", desc: "We understand local building regulations and common house styles in Dublin, ensuring a perfect fit every time." },
              { icon: "groups", title: "Community Trust", desc: `Our reputation in ${area.name} is built on word-of-mouth recommendations and hundreds of successful local projects.` },
            ].map(item => (
              <div key={item.title} className="text-center space-y-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-primary shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">We Also Serve</h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map(a => (
              <Link key={a.slug} className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-colors" href={`/areas/${a.slug}`}>
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Upgrade Your Home in {area.name}?</h2>
          <p className="text-white/90 text-lg">Contact us today for a free, no-obligation measurement and quote.</p>
          <Link href="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
