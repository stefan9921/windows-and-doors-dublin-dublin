import Header from "./components/Header";
import Footer from "./components/Footer";
import CTABanner from "./components/CTABanner";
import JsonLd from "./components/JsonLd";
import Link from "next/link";
import { makeBreadcrumbSchema, makeFAQSchema, BASE_URL } from "./lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windows and Doors Dublin | Professional Window & Door Services",
  description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services for homes across Dublin. Free quotes. Call 087777777.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Windows and Doors Dublin | Professional Window & Door Services",
    description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services. Free quotes.",
    url: BASE_URL,
  },
};

const services = [
  { icon: "window", title: "Windows Installation", desc: "Expert fitting of UPVC, aluminium, sash and double glazed windows for new builds and extensions across Dublin.", slug: "windows-installation" },
  { icon: "build", title: "Windows Replacement", desc: "Professional upgrade of old windows to modern double or triple glazing. Affordable replacement windows Dublin homeowners trust.", slug: "windows-replacement" },
  { icon: "meeting_room", title: "Doors Installation", desc: "Composite doors, sliding doors, French doors and patio doors supplied and fitted. Internal doors supplied and fitted Dublin-wide.", slug: "doors-installation" },
  { icon: "door_sensor", title: "Doors Replacement", desc: "Fast door repair Dublin service. PVC door repair, sliding door repairs and complete door replacement across Dublin.", slug: "doors-replacement" },
];

const areas = [
  { name: "Swords", slug: "swords" }, { name: "Tallaght", slug: "tallaght" }, { name: "Naas", slug: "naas" },
  { name: "Blanchardstown", slug: "blanchardstown" }, { name: "Lucan", slug: "lucan" }, { name: "Bray", slug: "bray" },
  { name: "Dundrum", slug: "dundrum" }, { name: "Drogheda", slug: "drogheda" }, { name: "Dún Laoghaire", slug: "dun-laoghaire" },
  { name: "Navan", slug: "navan" }, { name: "Mullingar", slug: "mullingar" }, { name: "Ashbourne", slug: "ashbourne" },
  { name: "Celbridge", slug: "celbridge" },
];

const whyUs = [
  { icon: "sell", title: "Free Quotes", desc: "Transparent pricing with no obligation. We visit your property and provide honest, itemised estimates for all windows and doors Dublin projects." },
  { icon: "engineering", title: "Expert Installation", desc: "Our certified window fitters Dublin team brings over 15 years of experience to every project, treating your home with care." },
  { icon: "workspace_premium", title: "Quality Materials", desc: "We source PVC windows, aluminium windows, and composite doors from leading Irish and European manufacturers." },
  { icon: "trending_down", title: "Competitive Prices", desc: "Best value for premium service. Our windows and doors Dublin prices are among the most competitive in the region." },
];

const faqs = [
  { question: "How much do windows and doors cost in Dublin?", answer: "Windows and doors Dublin prices vary depending on the type, material, and size. UPVC windows start from approximately €350 per window installed, while composite doors range from €800 to €2,500. We provide free, no-obligation quotes tailored to your specific requirements." },
  { question: "How long does window installation take in Dublin?", answer: "A standard window installation in Dublin typically takes 1-2 hours per window. A full house of windows can usually be completed within 2-3 days. Our expert window fitters Dublin team works efficiently to minimise disruption to your daily routine." },
  { question: "Do you offer double glazing in Dublin?", answer: "Yes, we are specialists in double glazing Dublin services. We supply and fit A-rated double glazed windows that significantly reduce heat loss, lower your energy bills, and reduce outside noise. We also offer triple glazing Dublin options for maximum thermal performance." },
  { question: "What areas in Dublin do you cover?", answer: "We serve the entire greater Dublin area including Swords, Tallaght, Blanchardstown, Lucan, Bray, Dún Laoghaire, Dundrum, and surrounding counties including Naas, Navan, Mullingar, Drogheda, Ashbourne, and Celbridge. Contact us for windows and doors near me service." },
  { question: "What types of doors do you install in Dublin?", answer: "We install all types of doors including composite doors Dublin, sliding doors, French doors, patio doors, aluminium doors, and internal doors. We also offer door repair Dublin services for PVC, UPVC, and aluminium door repairs." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={makeBreadcrumbSchema([{ name: "Home", url: BASE_URL }])} />
      <JsonLd data={makeFAQSchema(faqs)} />
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
                Dublin&apos;s trusted windows and doors company. Expert installation, replacement and repair services for homes across the greater Dublin area. From UPVC and PVC windows to composite doors, we deliver quality craftsmanship with competitive prices and free quotes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  Request Quote <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link href="/services/windows-installation" className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">verified</span> Fully Insured</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">shield</span> 10 Year Guarantee</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">star</span> 500+ Projects</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-slate-100">
                <img alt="Modern windows and doors installation Dublin - professional double glazing services" className="rounded-xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh_aepfymlxmPBRxKIlqBTZEOCiEg6mwkBMbizK1zF0RWQUj_ridmX5a3xCaTV7mZEHRs8tWGxzENP8xKXUn4OTRhx2r3lAb0EckkTZF-9WRnF2vezkq0eOnhC4QmwSdetIdZhBI2zX-zuYxJvnmGrvFQ1gNuI9mEJUC9Ukw7RRpVWAMwBwou91wu1dUS5Rxim-OjB0mTQjec3CzGOYiXc1rB2pPjpCGi-oj-6NM5bRu96Yf8MoR1fesObsC2Bdu_KT7FtWu_-mB8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dublin Windows and Doors Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Dublin&apos;s Leading Windows and Doors Company</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Windows and Doors Dublin is your one-stop solution for all window and door needs in the greater Dublin area. Whether you need new <Link href="/services/windows-installation" className="text-primary font-semibold hover:underline">window installation</Link>, <Link href="/services/windows-replacement" className="text-primary font-semibold hover:underline">replacement windows</Link>, <Link href="/services/doors-installation" className="text-primary font-semibold hover:underline">door installation</Link>, or <Link href="/services/doors-replacement" className="text-primary font-semibold hover:underline">door repairs</Link>, our experienced team delivers exceptional results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <p className="text-slate-600 font-medium">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">15+</div>
              <p className="text-slate-600 font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-primary mb-2">10yr</div>
              <p className="text-slate-600 font-medium">Product Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Windows and Door Services in Dublin</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From sash windows Dublin to composite doors Dublin, we offer a complete range of professional glazing and entry door services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(s => (
              <div key={s.slug} className="group bg-white p-8 rounded-2xl border border-transparent hover:border-primary/30 transition-all hover:shadow-xl">
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
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Why Choose Windows and Doors Dublin?</h2>
              <p className="text-slate-600">As a leading door company Dublin homeowners recommend, we pride ourselves on delivering excellence in every project, combining traditional craftsmanship with modern technology.</p>
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

      {/* What We Offer - Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900">Complete Window Solutions for Dublin Homes</h2>
              <p className="text-slate-600 leading-relaxed">
                Whether you&apos;re searching for <strong>windows and doors near me</strong> or specifically looking for <strong>UPVC windows Dublin</strong>, <strong>PVC windows Dublin</strong>, or <strong>sash windows Dublin</strong>, our comprehensive service covers every need. We specialise in double glazing Dublin installations that dramatically reduce heat loss and noise while increasing your property&apos;s value.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our <Link href="/services/windows-installation" className="text-primary font-semibold hover:underline">window installation Dublin</Link> service includes energy-efficient A-rated glass, aluminium windows, aluclad windows, triple glazing, Velux windows, and skylight installations. For older properties, we offer expert <Link href="/services/windows-replacement" className="text-primary font-semibold hover:underline">sash window restoration Dublin</Link> services that preserve period character while improving thermal performance.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Based in Dublin 12 at John F Kennedy Industrial Estate, we serve clients throughout the city and suburbs. Our team handles everything from initial survey to final quality check, ensuring every window and door meets our exacting standards. We&apos;re proud to be one of Dublin&apos;s most trusted <strong>window and door</strong> companies.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900">Premium Door Services Across Dublin</h2>
              <p className="text-slate-600 leading-relaxed">
                Looking for <strong>composite doors Dublin</strong>? Our range includes over 50 styles and colours with multi-point locking systems for maximum security. We also supply and fit <Link href="/services/doors-installation" className="text-primary font-semibold hover:underline">sliding doors Dublin</Link>, <strong>French doors Dublin</strong>, <strong>patio doors Dublin</strong>, and <strong>aluminium doors Dublin</strong> to suit every architectural style.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Need <strong>internal doors supplied and fitted Dublin</strong>? We offer a stunning range of interior doors in various styles from contemporary to classic. Our <Link href="/services/doors-replacement" className="text-primary font-semibold hover:underline">door repair Dublin</Link> service covers PVC door repair, UPVC door repair, sliding door repairs, patio door repairs, and complete front door replacement across the Dublin region.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every door we install comes with a comprehensive warranty and is fitted by experienced <strong>door fitters Dublin</strong> professionals. We also handle specialist requirements including roller shutter repairs Dublin and aluminium door repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Areas We Serve</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">We provide rapid response times and expert window and door services across the entire Dublin region and surrounding counties. Whether you&apos;re in North Dublin, South Dublin, or the wider Leinster area, our team is ready to help.</p>
              <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg border border-primary/20">Plus all of Dublin city &amp; suburbs</div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map(a => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary/10 transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-medium">{a.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our windows and doors Dublin services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background-light p-8 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
