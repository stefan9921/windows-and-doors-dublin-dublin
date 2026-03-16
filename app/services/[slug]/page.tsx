import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { makeBreadcrumbSchema, makeServiceSchema, makeFAQSchema, makeLocalBusinessSchema, BASE_URL } from "../../lib/schema";

interface ServiceInfo {
  title: string; h1: string; metaTitle: string; metaDesc: string;
  heroDesc: string; content: string[];
  offerings: { icon: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string }[];
  relatedAreas: { name: string; slug: string }[];
}

const serviceData: Record<string, ServiceInfo> = {
  "windows-installation": {
    title: "Windows Installation", h1: "Windows Installation Dublin",
    metaTitle: "Windows Installation Dublin | Expert Window Fitting",
    metaDesc: "Professional window installation in Dublin. UPVC, aluminium, sash and double glazed windows fitted by experts. Free quotes available. Call 087777777.",
    heroDesc: "Transform your home with our premium window installation solutions. We combine Irish craftsmanship with the latest energy-efficient technology to provide lasting value and security for your Dublin property.",
    content: [
      "At Windows and Doors Dublin, we deliver exceptional quality for every window installation project across the greater Dublin area. Our UPVC windows Dublin range and PVC windows Dublin options are designed to withstand the unique Irish climate, ensuring your home remains warm, quiet, and secure throughout the year. Whether you need windows for a new build, extension, or renovation, our certified window fitters Dublin team has the expertise to handle any project.",
      "We specialise in double glazing Dublin installations that dramatically improve energy efficiency, reduce noise pollution, and enhance the security of your property. Our sash windows Dublin service is particularly popular among period property owners looking to maintain the character of their homes while enjoying modern thermal performance. We also install aluminium windows Dublin, aluclad windows, and offer secondary glazing Dublin solutions for listed buildings.",
      "Our Velux windows Dublin and skylight installation Dublin service brings natural light into loft conversions, extensions, and attic rooms. As experienced Velux installers Dublin, we handle every aspect from structural assessment to weatherproofing and finishing. For those seeking maximum energy efficiency, our triple glazing Dublin option provides the highest thermal performance available on the market today.",
      "Based in Dublin 12, we serve clients across North Dublin, South Dublin, and the wider Leinster region. Every installation comes with a comprehensive 10-year product warranty and our 2-year workmanship guarantee. We use only A-rated energy-efficient glass to help reduce your heating bills and carbon footprint. Contact us today for a free, no-obligation window installation quote.",
    ],
    offerings: [
      { icon: "shield", title: "UPVC Windows", desc: "Highly durable and low-maintenance UPVC windows that offer excellent thermal insulation and value for money across Dublin homes." },
      { icon: "door_front", title: "Sash Windows", desc: "Preserve the historical character of your Dublin home with our traditional sliding sash window designs and expert restoration." },
      { icon: "layers", title: "Double Glazing", desc: "Upgrade to high-performance double glazing for superior heat retention, noise reduction, and lower energy bills." },
      { icon: "security", title: "Aluminium Windows", desc: "Sleek, modern aluminium and aluclad window frames that are incredibly strong and virtually maintenance-free." },
      { icon: "energy_savings_leaf", title: "Triple Glazing", desc: "Premium energy saving solution for those seeking the highest possible thermal performance in the Irish climate." },
      { icon: "villa", title: "Velux & Skylights", desc: "Expert Velux window and skylight installation bringing natural light into loft conversions and attic rooms." },
    ],
    faqs: [
      { question: "How much does window installation cost in Dublin?", answer: "Window installation costs in Dublin vary by type and size. UPVC windows start from around €350 per window installed, while aluminium or aluclad windows range from €500-€1,200. We provide free site surveys and detailed quotes with no obligation." },
      { question: "What type of windows are best for Dublin weather?", answer: "For the Irish climate, we recommend A-rated double glazed UPVC or aluminium windows. They provide excellent thermal insulation, weather resistance, and durability. Triple glazing is ideal for exposed or north-facing properties." },
      { question: "Do you install sash windows in Dublin?", answer: "Yes, we specialise in sash windows Dublin installations and restorations. We can fit new timber-effect UPVC sash windows or restore original period sash windows while upgrading the glazing for improved thermal performance." },
      { question: "How long does a full house window installation take?", answer: "A typical 3-bedroom house with 8-12 windows takes 2-3 working days. Each individual window takes approximately 1-2 hours to install. We work efficiently to minimise disruption to your home." },
      { question: "Are your window installers certified?", answer: "All our window fitters are fully certified, insured, and have years of experience in Dublin installations. We carry full public liability insurance and all work is covered by our comprehensive warranty." },
    ],
    relatedServices: [
      { title: "Windows Replacement", slug: "windows-replacement" },
      { title: "Doors Installation", slug: "doors-installation" },
      { title: "Doors Replacement", slug: "doors-replacement" },
    ],
    relatedAreas: [
      { name: "Swords", slug: "swords" }, { name: "Tallaght", slug: "tallaght" },
      { name: "Blanchardstown", slug: "blanchardstown" }, { name: "Lucan", slug: "lucan" },
      { name: "Bray", slug: "bray" },
    ],
  },
  "windows-replacement": {
    title: "Windows Replacement", h1: "Windows Replacement Dublin",
    metaTitle: "Windows Replacement Dublin | Affordable Window Upgrades",
    metaDesc: "Expert window replacement services in Dublin. Upgrade to energy-efficient double or triple glazed windows. Competitive prices, free estimates. Call 087777777.",
    heroDesc: "Upgrade your old, draughty windows with modern, energy-efficient replacements. Our expert team handles everything from removal to installation, leaving your home looking and performing better than ever.",
    content: [
      "Old windows can be a major source of heat loss and noise pollution in Dublin homes. Our replacement windows Dublin service addresses these issues with modern, high-performance units that dramatically improve your home's comfort and energy efficiency. Whether you have single-pane windows, failed double glazing, or outdated timber frames, we provide the perfect upgrade solution.",
      "We offer a comprehensive window repair Dublin service alongside full replacements. Our team can fix broken locks, hinges, seals, misted units, and damaged frames — often saving you the cost of a complete replacement. For UPVC window repairs Dublin and PVC window repair Dublin needs, we carry a wide range of spare parts and can usually complete repairs in a single visit.",
      "Our sash window restoration Dublin service is ideal for period properties across Dublin. We carefully restore original sash windows, upgrading the glazing and draught-proofing while maintaining the authentic appearance that adds character and value to heritage homes. This service is particularly popular in areas like Dún Laoghaire, Dundrum, and Bray where Victorian and Edwardian properties are common.",
      "The window replacement cost Dublin homeowners face depends on the type, size, and number of windows. We provide transparent, itemised quotes with no hidden charges. Every replacement comes with A-rated energy-efficient glass as standard, multi-point locking systems, and our comprehensive warranty. We serve the entire Dublin region including North Dublin window and door repairs, Dublin 12, Dublin 15, and all surrounding areas.",
    ],
    offerings: [
      { icon: "shield", title: "UPVC Replacements", desc: "Cost-effective and energy-efficient UPVC replacement windows for all Dublin homes, available in multiple colours and styles." },
      { icon: "door_front", title: "Sash Restoration", desc: "Expert sash window restoration Dublin service preserving period character while upgrading thermal performance." },
      { icon: "layers", title: "Double Glazing Upgrades", desc: "Replace single-pane or failed double glazing with modern A-rated double glazed units for better insulation." },
      { icon: "security", title: "Window Repairs", desc: "Professional window repair Dublin service — fix broken locks, hinges, seals, and misted glass units." },
      { icon: "energy_savings_leaf", title: "Energy-Rated Glass", desc: "Upgrade to A-rated glazing for maximum energy efficiency, reduced heating bills, and a smaller carbon footprint." },
      { icon: "villa", title: "Full Frame Replacement", desc: "Complete window frame and glass replacement for severely damaged or outdated units throughout Dublin." },
    ],
    faqs: [
      { question: "How much does window replacement cost in Dublin?", answer: "Window replacement cost in Dublin ranges from €300-€500 for standard UPVC windows to €800-€1,500 for larger or specialist units. A full house replacement typically costs €3,000-€8,000 depending on the number and type of windows. We provide free detailed quotes." },
      { question: "Can you repair windows instead of replacing them?", answer: "Yes, our window repair Dublin service can fix many issues including broken locks, worn hinges, failed seals, misted double glazing, and draughts. Repairs are often more cost-effective than full replacement and we can advise on the best option during our free survey." },
      { question: "What are the signs I need replacement windows?", answer: "Common signs include condensation between glass panes, visible draughts, difficulty opening or closing, rotting frames, excessive outside noise, and higher energy bills. If your windows are over 20 years old, replacement will likely improve both comfort and energy efficiency." },
      { question: "Do you replace windows in North Dublin?", answer: "Yes, we provide North Dublin window and door repairs and replacements across all areas including Swords, Blanchardstown, Santry, and surrounding suburbs. We serve the entire greater Dublin region." },
    ],
    relatedServices: [
      { title: "Windows Installation", slug: "windows-installation" },
      { title: "Doors Replacement", slug: "doors-replacement" },
      { title: "Doors Installation", slug: "doors-installation" },
    ],
    relatedAreas: [
      { name: "Dún Laoghaire", slug: "dun-laoghaire" }, { name: "Dundrum", slug: "dundrum" },
      { name: "Naas", slug: "naas" }, { name: "Drogheda", slug: "drogheda" },
      { name: "Ashbourne", slug: "ashbourne" },
    ],
  },
  "doors-installation": {
    title: "Doors Installation", h1: "Doors Installation Dublin",
    metaTitle: "Doors Installation Dublin | Composite, Sliding & French",
    metaDesc: "Professional door installation in Dublin. Composite, sliding, French and patio doors supplied and fitted. Internal doors fitted. Call 087777777 for a free quote.",
    heroDesc: "Enhance your home's entrance with our premium door installation service. From stunning composite front doors to elegant patio and French doors, we supply and fit doors that combine security, style, and energy efficiency across Dublin.",
    content: [
      "Your front door is the first impression visitors get of your home. At Windows and Doors Dublin, we offer an extensive range of composite doors Dublin homeowners love — combining the beauty of traditional timber with the strength of modern materials. Our composite doors feature multi-point locking systems, thermal cores for excellent insulation, and are available in over 50 colours and styles to match any Dublin property.",
      "We are Dublin's go-to specialists for internal doors supplied and fitted. Our range of interior doors includes contemporary flush designs, classic panelled styles, glazed options for light flow, and fire-rated doors for safety compliance. As experienced door fitters Dublin, we ensure every internal door is perfectly hung, with smooth operation and a flawless finish.",
      "Our sliding doors Dublin service is perfect for modern homes and extensions looking to create a seamless connection between indoor and outdoor living spaces. We also supply and fit French doors Dublin, patio doors Dublin, and aluminium doors Dublin — all engineered for the Irish climate with superior weather sealing and security features. Whether you prefer the sleek lines of aluminium or the warmth of timber-effect finishes, we have options to suit every taste and budget.",
      "Every door installation comes with our comprehensive warranty and is fitted by certified professionals. We serve the entire Dublin area including Dublin 12 and surrounding suburbs. As a trusted door company Dublin residents recommend, we pride ourselves on transparent pricing, professional service, and quality that lasts. Contact us for a free site survey and quotation.",
    ],
    offerings: [
      { icon: "security", title: "Composite Doors", desc: "The ultimate in front door security and aesthetics — composite doors Dublin homeowners trust for maximum strength and style." },
      { icon: "door_front", title: "Internal Doors", desc: "Internal doors supplied and fitted Dublin-wide. Contemporary, classic, glazed, and fire-rated options available." },
      { icon: "villa", title: "Patio Doors", desc: "Seamlessly connect indoor and outdoor spaces with elegant patio doors engineered for the Irish climate." },
      { icon: "layers", title: "French Doors", desc: "Classic double-opening French doors Dublin that bring light, elegance, and a touch of continental style." },
      { icon: "shield", title: "Sliding Doors", desc: "Space-saving sliding doors Dublin solutions perfect for modern homes, extensions, and open-plan living areas." },
      { icon: "energy_savings_leaf", title: "Aluminium Doors", desc: "Slim-profile aluminium doors Dublin offering maximum glass area, contemporary style, and lasting durability." },
    ],
    faqs: [
      { question: "How much do composite doors cost in Dublin?", answer: "Composite doors in Dublin typically range from €800 to €2,500 depending on style, glass options, and hardware. We offer a wide selection with multi-point locks as standard. All prices include professional fitting and our comprehensive warranty." },
      { question: "Do you supply and fit internal doors in Dublin?", answer: "Yes, we are specialists in internal doors supplied and fitted across Dublin. Our range includes flush, panelled, glazed, and fire-rated doors. We handle everything from measurement to fitting, including new frames and architraves if needed." },
      { question: "What is the best type of front door for security?", answer: "Composite doors offer the best combination of security and aesthetics. They feature reinforced cores, multi-point locking systems, and anti-snap cylinder locks. Our composite doors Dublin range meets the highest security standards while looking stunning." },
      { question: "Can you install sliding patio doors?", answer: "Absolutely. Our sliding doors Dublin service includes inline sliders, lift-and-slide systems, and bi-fold doors. We supply both UPVC and aluminium options to suit your property style and budget." },
      { question: "How long does door installation take?", answer: "A standard front door replacement takes approximately 2-4 hours. Internal doors take about 1-2 hours each. Sliding or patio door installations may take a full day depending on the size and structural requirements." },
    ],
    relatedServices: [
      { title: "Doors Replacement", slug: "doors-replacement" },
      { title: "Windows Installation", slug: "windows-installation" },
      { title: "Windows Replacement", slug: "windows-replacement" },
    ],
    relatedAreas: [
      { name: "Swords", slug: "swords" }, { name: "Navan", slug: "navan" },
      { name: "Celbridge", slug: "celbridge" }, { name: "Mullingar", slug: "mullingar" },
      { name: "Tallaght", slug: "tallaght" },
    ],
  },
  "doors-replacement": {
    title: "Doors Replacement", h1: "Doors Replacement & Repair Dublin",
    metaTitle: "Door Repair Dublin | Replacement & Repair Services",
    metaDesc: "Door replacement and repair services across Dublin. PVC, composite, sliding and patio door repairs. Quick turnaround, affordable prices. Call 087777777.",
    heroDesc: "Don't put up with a worn, damaged, or draughty door. Our door repair Dublin service covers all door types — from PVC and composite front doors to sliding patio doors and internal doors throughout your home.",
    content: [
      "A damaged or poorly functioning door compromises your home's security, insulation, and appearance. Our door repair Dublin and replacement service provides efficient, professional solutions for every type of door problem. Whether you need a quick fix or a complete door replacement, our experienced team delivers quality results at competitive prices.",
      "We specialise in PVC door repair Dublin, UPVC door repair Dublin, and composite door repairs. Common issues we fix include broken locks, dropped hinges, misaligned frames, draughty seals, cracked panels, and stiff mechanisms. Our team carries a comprehensive range of replacement parts and can often complete repairs in a single visit, saving you time and money.",
      "For sliding door repairs Dublin, patio door repairs Dublin, and aluminium door repairs Dublin, we have specialist technicians who understand the unique mechanisms involved. We repair rollers, tracks, locks, handles, and seals on all types of sliding and patio door systems. Our door fix Dublin service also covers front door replacement, door handle repair Dublin, and even Dublin garage door repair for residential properties.",
      "When repair isn't practical, our door replacement service ensures a seamless upgrade. We supply and fit all types of replacement doors including composite, UPVC, aluminium, and timber alternatives. Every replacement includes new hardware, draught-proofing, and our comprehensive warranty. We cover the entire Dublin area including North Dublin window and door repairs, roller shutter repairs Dublin, and all suburbs.",
    ],
    offerings: [
      { icon: "shield", title: "PVC Door Repairs", desc: "Expert PVC and UPVC door repair Dublin service — fix locks, hinges, handles, and seals quickly and affordably." },
      { icon: "security", title: "Composite Door Replacement", desc: "Upgrade to a new composite door for unbeatable security, thermal performance, and kerb appeal." },
      { icon: "villa", title: "Patio Door Repairs", desc: "Get your sliding or patio doors running smoothly again with our specialist patio door repairs Dublin service." },
      { icon: "layers", title: "Aluminium Door Repairs", desc: "Specialist aluminium door repairs Dublin service for all commercial and residential aluminium door systems." },
      { icon: "door_front", title: "Lock & Handle Repairs", desc: "Door handle repair Dublin and lock replacement service for improved home security and peace of mind." },
      { icon: "energy_savings_leaf", title: "Draft Proofing", desc: "Seal gaps and replace worn weather strips to stop draughts, reduce noise, and save energy on heating bills." },
    ],
    faqs: [
      { question: "How much does door repair cost in Dublin?", answer: "Door repair costs in Dublin typically range from €80 for simple fixes like handle replacements to €300+ for more complex lock mechanism or hinge repairs. We provide upfront pricing with no hidden charges. Contact us for a free assessment." },
      { question: "Can you fix a dropped PVC door?", answer: "Yes, dropped PVC doors are one of our most common repairs. We adjust hinges, replace worn components, and realign the door in the frame. PVC door repair Dublin is usually completed within an hour at your property." },
      { question: "Do you repair sliding patio doors?", answer: "Absolutely. Our sliding door repairs Dublin service covers rollers, tracks, locks, handles, and seals on all brands and types of sliding patio doors. We also service French door and bi-fold door mechanisms." },
      { question: "When should I replace rather than repair a door?", answer: "We recommend replacement when the frame is structurally compromised, the door is severely warped, security features can't be upgraded, or energy efficiency is very poor. Our technicians will advise honestly on the most cost-effective option." },
      { question: "Do you offer emergency door repair in Dublin?", answer: "We prioritise security-related repairs and can often attend the same day or next morning for broken locks or damaged doors. Call 087 777 777 for urgent door repair Dublin assistance." },
    ],
    relatedServices: [
      { title: "Doors Installation", slug: "doors-installation" },
      { title: "Windows Replacement", slug: "windows-replacement" },
      { title: "Windows Installation", slug: "windows-installation" },
    ],
    relatedAreas: [
      { name: "Dún Laoghaire", slug: "dun-laoghaire" }, { name: "Bray", slug: "bray" },
      { name: "Lucan", slug: "lucan" }, { name: "Drogheda", slug: "drogheda" },
      { name: "Blanchardstown", slug: "blanchardstown" },
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
  const url = `${BASE_URL}/services/${slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: s.metaTitle, description: s.metaDesc, url },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceData[slug];
  if (!s) notFound();

  const url = `${BASE_URL}/services/${slug}`;
  const breadcrumbItems = [
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` },
    { name: s.title, url },
  ];

  return (
    <>
      <JsonLd data={makeLocalBusinessSchema()} />
      <JsonLd data={makeBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={makeServiceSchema(s.h1, s.metaDesc, url)} />
      <JsonLd data={makeFAQSchema(s.faqs)} />
      <Header />

      {/* Hero */}
      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "Services", href: "/services/windows-installation" }, { name: s.title }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">{s.h1}</h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">{s.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/30 inline-block">
                Get Free Quote Today
              </Link>
              <a href="tel:087777777" className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-primary hover:text-white inline-flex items-center gap-2">
                <span className="material-symbols-outlined">call</span> 087 777 777
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Professional {s.title} Solutions in Dublin</h2>
              <div className="space-y-4 text-charcoal leading-relaxed">
                {s.content.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl">
                <img alt={`${s.title} service in Dublin - professional ${s.title.toLowerCase()} by Windows and Doors Dublin`} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxUlPyyrHsgGSL2cUaRKksCcFfv7uD2kHK9fz1gXrhkrFXGtbU5udQx-0R3kd7VadQIbyU6CZqYwpvBcMxYRcbejKOnYeeV9HuPhwlThp9pIJkf7k7WNfPs5kSPjvd9wCUAvohK_SYRp101qNP6yz7qCwBeLyxuf8fwsXNoMpOgw3fLcK4MqPMy154CV6dBaDtEmFPGhJ5khA-hRvh49598gJScQJ9mZqZGn6HPIWk0FHLjksdi50nXR1f4gpQBDbJ4a3oldE6E2c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our {s.title} Services</h2>
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
            <p className="text-slate-600">How we ensure a perfect {s.title.toLowerCase()} experience from start to finish</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-primary/20 -z-10"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { n: "1", t: "Free Consultation", d: "We visit your property to assess your needs and take measurements." },
                { n: "2", t: "Custom Quote", d: "Receive a transparent, itemized quote tailored to your requirements." },
                { n: "3", t: "Professional Work", d: "Our expert team completes the work with minimal disruption." },
                { n: "4", t: "Quality Guarantee", d: "Every project backed by our comprehensive warranty." },
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

      {/* FAQ */}
      <section className="py-20 bg-background-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about {s.title.toLowerCase()} in Dublin</p>
          </div>
          <div className="space-y-6">
            {s.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Other Services</h3>
              <div className="flex flex-wrap gap-3">
                {s.relatedServices.map(rs => (
                  <Link key={rs.slug} href={`/services/${rs.slug}`} className="px-5 py-2 bg-background-light hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-colors">
                    {rs.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Areas We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {s.relatedAreas.map(a => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className="px-5 py-2 bg-background-light hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-colors">
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Get Your Free {s.title} Quote</h2>
            <p className="text-white/80 text-lg">Join 500+ satisfied Dublin homeowners. No obligation consultation.</p>
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
