import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { makeBreadcrumbSchema, makeLocalBusinessSchema, makeFAQSchema, BASE_URL } from "../../lib/schema";

interface AreaInfo {
  name: string; slug: string;
  description: string;
  landmarks: string;
  content: string[];
  faqs: { question: string; answer: string }[];
}

const allAreas: AreaInfo[] = [
  {
    name: "Swords", slug: "swords",
    description: "Professional windows and doors installation, replacement and repair in Swords, Co. Dublin. Serving Swords and North Dublin. Free quotes — call 087777777.",
    landmarks: "near Swords Castle, Pavilions Shopping Centre, and the Estuary area",
    content: [
      "Windows and Doors Dublin proudly serves Swords and the wider North Dublin region with premium window and door solutions. As one of Dublin's fastest-growing towns, Swords has seen significant residential development in recent years, from new estates near the Pavilions Shopping Centre to the established neighbourhoods around Swords Castle and the Ward River Valley Park.",
      "Whether you live in Applewood, Boroimhe, River Valley, or any part of Swords, our team provides expert window installation, replacement, and door fitting services tailored to your property. We specialise in energy-efficient double glazing, UPVC windows, composite doors, and sliding patio doors that suit both modern and traditional Swords homes.",
      "Our Swords customers benefit from quick response times and local knowledge. We understand the building styles common in North County Dublin and can advise on the best window and door solutions for your home. From the newer developments near Dublin Airport to the period properties in Swords village, we have the expertise to deliver exceptional results.",
    ],
    faqs: [
      { question: "Do you install windows and doors in Swords?", answer: "Yes, we provide full window and door installation, replacement, and repair services throughout Swords and North Dublin. We serve all areas including Applewood, River Valley, Boroimhe, and Swords village." },
      { question: "How quickly can you provide a quote in Swords?", answer: "We typically arrange free site surveys in Swords within 2-3 business days. Being based in Dublin 12, we have easy access to all North Dublin areas via the M50 and M1 motorways." },
      { question: "What types of windows are popular in Swords?", answer: "A-rated UPVC double glazed windows are the most popular choice for Swords homes due to their excellent thermal performance and value. We also install aluminium, aluclad, and triple glazed options." },
    ],
  },
  {
    name: "Naas", slug: "naas",
    description: "Professional windows and doors installation, replacement and repair in Naas, Co. Kildare. Serving Naas and surrounding areas. Free quotes — call 087777777.",
    landmarks: "near Naas Racecourse, Punchestown, and the historic town centre",
    content: [
      "Windows and Doors Dublin extends its expert services to Naas and County Kildare. As the county town of Kildare, Naas boasts a mix of period properties in the town centre, established family homes, and modern developments along the Sallins Road and Millennium Park areas.",
      "We provide comprehensive window and door services throughout Naas and surrounding towns including Sallins, Kill, and Johnstown. Our range covers everything from UPVC and aluminium window installation to composite door fitting, double glazing upgrades, and specialist window repairs.",
      "Naas homeowners appreciate our competitive pricing and professional service. Whether you're upgrading windows in a Georgian townhouse near the historic Main Street or fitting patio doors in a new-build near Punchestown, our team delivers quality craftsmanship and lasting results every time.",
    ],
    faqs: [
      { question: "Do you cover Naas for window installation?", answer: "Yes, we serve Naas, Sallins, Kill, Johnstown and all of County Kildare. Our team regularly works in the Naas area and can arrange free surveys at your convenience." },
      { question: "How much do replacement windows cost in Naas?", answer: "Replacement window costs in Naas are comparable to Dublin pricing, starting from approximately €350 for standard UPVC windows. We provide free, detailed quotes tailored to your specific requirements." },
    ],
  },
  {
    name: "Navan", slug: "navan",
    description: "Professional windows and doors installation, replacement and repair in Navan, Co. Meath. Serving Navan and surrounding areas. Free quotes — call 087777777.",
    landmarks: "near Navan Town Centre, Solstice Arts Centre, and Athlumney Castle",
    content: [
      "Windows and Doors Dublin provides expert window and door services to Navan and the wider County Meath region. As the county town of Meath, Navan features a diverse range of properties from period homes around the historic Trimgate Street to modern estates in Johnstown, Blackcastle, and Clonmagadden.",
      "Our services in Navan include UPVC and aluminium window installation, composite door fitting, double glazing upgrades, window repairs, and complete window replacement. We understand the particular needs of Meath homeowners and deliver energy-efficient solutions that withstand the local climate.",
      "With excellent motorway access via the M3, our Dublin-based team provides prompt service to Navan residents. We regularly work on properties near the Solstice Arts Centre, Navan Shopping Centre, and residential areas throughout the town. Contact us for a free survey and competitive quote.",
    ],
    faqs: [
      { question: "Do you service Navan for windows and doors?", answer: "Yes, we regularly serve Navan and all of County Meath. We provide the same high-quality service and competitive pricing as our Dublin projects." },
      { question: "Is there an additional charge for Navan area?", answer: "No, we don't charge extra for travel to Navan. Our quotes include all costs with no hidden fees, regardless of your location in the greater Dublin/Meath area." },
    ],
  },
  {
    name: "Mullingar", slug: "mullingar",
    description: "Professional windows and doors installation, replacement and repair in Mullingar, Co. Westmeath. Free quotes — call 087777777.",
    landmarks: "near Mullingar Cathedral, Lough Ennell, and the Royal Canal Greenway",
    content: [
      "Windows and Doors Dublin extends its professional services to Mullingar and County Westmeath. As the county town, Mullingar offers a rich mix of Victorian townhouses, established family homes, and new residential developments near Lough Ennell and the Royal Canal Greenway.",
      "We provide the full range of window and door services in Mullingar including energy-efficient double and triple glazing, UPVC and aluminium windows, composite doors, sliding doors, and specialist repairs. Our team understands the building styles prevalent in the Midlands and can recommend the best solutions for your property.",
      "Mullingar homeowners trust us for transparent pricing, quality materials, and expert installation. Whether you're near the Cathedral, Austin Friars Street, or the newer Rathconnell and Ardmore estates, we deliver results that enhance your home's comfort, security, and value.",
    ],
    faqs: [
      { question: "Do you cover Mullingar for window services?", answer: "Yes, we serve Mullingar and the wider Westmeath area. Our team travels from Dublin to provide free surveys and competitive quotes to Mullingar homeowners." },
    ],
  },
  {
    name: "Tallaght", slug: "tallaght",
    description: "Professional windows and doors installation, replacement and repair in Tallaght, Dublin 24. Serving Tallaght and South Dublin. Free quotes — call 087777777.",
    landmarks: "near The Square Shopping Centre, Tallaght Stadium, and the Dublin Mountains",
    content: [
      "Windows and Doors Dublin is your local expert for window and door services in Tallaght and South Dublin. From the established estates around The Square Shopping Centre and Tallaght Village to newer developments in Citywest, Saggart, and Kiltipper, we serve every corner of the Dublin 24 area.",
      "Tallaght homeowners choose us for affordable, high-quality window installation, double glazing, composite doors, and window repairs. Being based in nearby Dublin 12, we offer exceptionally quick response times and local knowledge that larger national companies simply can't match.",
      "Whether you need replacement windows for a semi-detached in Old Bawn, sliding patio doors for a home in Firhouse, or a new composite front door in Jobstown, our experienced team delivers professional results. We also serve neighbouring areas including Templeogue, Rathfarnham, and the Dublin Mountains foothills.",
    ],
    faqs: [
      { question: "Do you install windows in Tallaght?", answer: "Yes, Tallaght is one of our core service areas. We're based in nearby Dublin 12 and regularly install windows and doors throughout Tallaght, Firhouse, Old Bawn, Kilnamanagh, and surrounding areas." },
      { question: "Can you replace windows in Dublin 24?", answer: "Absolutely. We provide full window replacement services across Dublin 24. Our range includes UPVC, aluminium, and timber-effect windows to suit all property types in the Tallaght area." },
    ],
  },
  {
    name: "Drogheda", slug: "drogheda",
    description: "Professional windows and doors installation, replacement and repair in Drogheda, Co. Louth. Free quotes — call 087777777.",
    landmarks: "near the Boyne Viaduct, Scotch Hall, and Millmount Tower",
    content: [
      "Windows and Doors Dublin provides expert services to Drogheda and the Louth/East Meath region. As one of Ireland's largest towns, Drogheda features a fascinating mix of heritage buildings along the River Boyne, established residential areas, and modern developments in areas like Bryanstown, Mell, and Rathmullan.",
      "We offer comprehensive window and door solutions throughout Drogheda including UPVC and aluminium window installation, composite door fitting, double glazing, and professional repairs. Our team is experienced with both period properties near the historic town centre and modern homes in newer estates.",
      "Drogheda residents enjoy our competitive Dublin pricing with no additional travel charges. Accessible via the M1 motorway, we provide prompt free surveys and efficient installation schedules. Whether you're near Scotch Hall, Millmount, or the suburbs, contact us for quality windows and doors.",
    ],
    faqs: [
      { question: "Do you service Drogheda for windows and doors?", answer: "Yes, we serve Drogheda and the wider Louth region. We travel from Dublin regularly and offer the same competitive pricing as our city projects." },
    ],
  },
  {
    name: "Lucan", slug: "lucan",
    description: "Professional windows and doors installation, replacement and repair in Lucan, Dublin 20. Serving Lucan and West Dublin. Free quotes — call 087777777.",
    landmarks: "near Lucan Village, the Liffey Valley Shopping Centre, and Griffeen Valley Park",
    content: [
      "Windows and Doors Dublin serves Lucan and West Dublin with premium window and door services. From the charming period properties in Lucan Village to the extensive residential developments in Esker, Adamstown, and along the Griffeen Valley, we cater to every property type in the area.",
      "Our Lucan services include UPVC and aluminium window installation, double and triple glazing, composite front doors, sliding patio doors, and window repairs. We're particularly experienced with the housing styles common in West Dublin, from semi-detached family homes to modern apartment complexes.",
      "Being based in Dublin 12, we're just a short drive from Lucan via the N4 and M50. Our team provides fast free surveys, competitive quotes, and professional installation with minimal disruption. We also serve neighbouring areas including Leixlip, Celbridge, Palmerstown, and Clondalkin.",
    ],
    faqs: [
      { question: "Do you cover Lucan for window services?", answer: "Yes, Lucan and all of West Dublin are key service areas. We regularly install windows and doors in Lucan, Adamstown, Esker, and surrounding areas." },
    ],
  },
  {
    name: "Bray", slug: "bray",
    description: "Professional windows and doors installation, replacement and repair in Bray, Co. Wicklow. Free quotes — call 087777777.",
    landmarks: "near Bray Head, the Seafront Promenade, and Bray Dart Station",
    content: [
      "Windows and Doors Dublin proudly serves Bray and the North Wicklow coast with expert window and door solutions. Bray's diverse architecture — from Victorian seafront terraces and Edwardian villas to modern estates in Fassaroe, Ballywaltrim, and the Southern Cross area — requires a service provider with broad expertise.",
      "We specialise in energy-efficient windows and doors that are built to withstand the coastal climate. Our range includes marine-grade aluminium windows, UPVC double glazing, composite doors with enhanced weather sealing, and specialist sash window restoration for Bray's many period properties.",
      "Bray residents benefit from our competitive pricing and expert knowledge of coastal building requirements. Whether your home overlooks Bray Head, sits along the seafront promenade, or is nestled in the newer developments toward Fassaroe, we deliver lasting quality and exceptional service.",
    ],
    faqs: [
      { question: "Do you service Bray for windows and doors?", answer: "Yes, we serve Bray and all of North Wicklow. We provide the same high-quality service and competitive pricing as our Dublin city projects." },
      { question: "Do you recommend specific windows for coastal areas?", answer: "Yes, for coastal areas like Bray we recommend marine-grade aluminium or high-quality UPVC windows with enhanced weather sealing. These resist salt air corrosion and provide superior protection against the elements." },
    ],
  },
  {
    name: "Dún Laoghaire", slug: "dun-laoghaire",
    description: "Professional windows and doors in Dún Laoghaire. Installation, replacement and repair. Serving Dún Laoghaire-Rathdown. Free quotes — call 087777777.",
    landmarks: "near Dún Laoghaire Harbour, the East Pier, and Sandycove",
    content: [
      "Windows and Doors Dublin provides premium window and door services to Dún Laoghaire and the wider Dún Laoghaire-Rathdown area. This prestigious South Dublin district features many stunning Victorian and Edwardian properties alongside modern developments, each requiring specialist expertise.",
      "We excel in sash window restoration for Dún Laoghaire's many period homes — preserving the elegant character of properties near the harbour, along the seafront, and in Sandycove, Glasthule, and Monkstown. Our UPVC, aluminium, and aluclad window systems are also popular for modern renovations and extensions.",
      "Our composite door range is ideal for the grand entrances common in Dún Laoghaire properties. We also supply and fit sliding doors, French doors, and patio doors to complement the coastal lifestyle. Contact us for a free survey and discover why Dún Laoghaire homeowners trust Windows and Doors Dublin.",
    ],
    faqs: [
      { question: "Do you install windows in Dún Laoghaire?", answer: "Yes, we serve the entire Dún Laoghaire-Rathdown area including Sandycove, Glasthule, Monkstown, and Dalkey. We specialise in both period property restorations and modern installations." },
    ],
  },
  {
    name: "Ashbourne", slug: "ashbourne",
    description: "Professional windows and doors installation, replacement and repair in Ashbourne, Co. Meath. Free quotes — call 087777777.",
    landmarks: "near Ashbourne Town Centre, Pillo Hotel, and Tayto Park (now Emerald Park)",
    content: [
      "Windows and Doors Dublin provides expert window and door services to Ashbourne and surrounding South Meath communities. With its excellent transport links to Dublin via the M2 motorway, Ashbourne has grown significantly, featuring a mix of modern family homes and established properties.",
      "We serve all residential areas in Ashbourne including Bourne View, Castle Crescent, Millbourne, and Killegland with our full range of services — UPVC windows, aluminium windows, composite doors, double glazing upgrades, and professional window repairs.",
      "Our competitive pricing and professional service make us the first choice for Ashbourne homeowners looking to upgrade their windows and doors. We also cover nearby Ratoath, Dunshaughlin, and Dunboyne for your convenience.",
    ],
    faqs: [
      { question: "Do you cover Ashbourne for windows and doors?", answer: "Yes, we regularly serve Ashbourne and South Meath. Free surveys are available at your convenience with no travel surcharges." },
    ],
  },
  {
    name: "Blanchardstown", slug: "blanchardstown",
    description: "Professional windows and doors in Blanchardstown, Dublin 15. Installation, replacement and repair. Free quotes — call 087777777.",
    landmarks: "near Blanchardstown Shopping Centre, National Aquatic Centre, and Connolly Hospital",
    content: [
      "Windows and Doors Dublin serves Blanchardstown and the wider Dublin 15 area with comprehensive window and door services. As one of Dublin's largest suburban centres, Blanchardstown features diverse housing from established estates in Castleknock and Carpenterstown to newer developments in Tyrrelstown and Ongar.",
      "We install, replace, and repair all types of windows and doors throughout Blanchardstown. Our most popular services include UPVC double glazing installation, composite front doors, sliding patio doors, and specialist window repairs. We understand the specific needs of Dublin 15 properties and deliver tailored solutions.",
      "Located in Dublin 12, we're easily accessible to Blanchardstown via the M50. Our team provides prompt free surveys, honest pricing, and professional installation. We also serve Castleknock, Clonsilla, Mulhuddart, and surrounding Dublin 15 areas.",
    ],
    faqs: [
      { question: "Do you install windows in Blanchardstown?", answer: "Yes, Blanchardstown and all of Dublin 15 are core service areas. We regularly work in Castleknock, Clonsilla, Tyrrelstown, Ongar, and throughout the area." },
    ],
  },
  {
    name: "Dundrum", slug: "dundrum",
    description: "Professional windows and doors in Dundrum, Dublin 14 & 16. Installation, replacement and repair. Free quotes — call 087777777.",
    landmarks: "near Dundrum Town Centre, Dundrum Village, and Marlay Park",
    content: [
      "Windows and Doors Dublin provides expert services to Dundrum and South Dublin including Dublin 14 and Dublin 16 areas. Dundrum's mix of Victorian cottages in the village, Edwardian homes, and modern apartments near Dundrum Town Centre requires versatile expertise in window and door solutions.",
      "We specialise in sensitive upgrades for period properties — sash window restoration, timber-effect UPVC windows, and elegant composite doors that complement Dundrum's architectural heritage. For modern homes, we offer the latest in aluminium glazing systems, sliding doors, and energy-efficient double and triple glazing.",
      "Our services extend to all surrounding areas including Churchtown, Ballinteer, Sandyford, Goatstown, and Windy Arbour. As a South Dublin resident's trusted choice, we deliver quality craftsmanship with competitive pricing and comprehensive warranties on all work.",
    ],
    faqs: [
      { question: "Do you serve Dundrum for window installation?", answer: "Yes, we serve Dundrum and all surrounding South Dublin areas. We have extensive experience with both period and modern properties in the Dundrum area." },
    ],
  },
  {
    name: "Celbridge", slug: "celbridge",
    description: "Professional windows and doors in Celbridge, Co. Kildare. Installation, replacement and repair. Free quotes — call 087777777.",
    landmarks: "near Castletown House, Celbridge Main Street, and the River Liffey",
    content: [
      "Windows and Doors Dublin serves Celbridge and North Kildare with premium window and door services. Celbridge, home to the magnificent Castletown House and situated along the River Liffey, features a blend of heritage properties and modern housing developments in areas like Primrose Gate, Simmonstown, and Oldtown.",
      "We provide comprehensive services including UPVC and aluminium window installation, composite doors, double glazing, and specialist repairs. Our team understands the planning considerations for properties near the historic town centre and can advise on appropriate solutions that respect local architectural character.",
      "Celbridge residents enjoy our competitive pricing with no travel surcharges. We also serve nearby Maynooth, Leixlip, and Straffan. Contact us for a free survey and quote tailored to your Celbridge property.",
    ],
    faqs: [
      { question: "Do you cover Celbridge for windows and doors?", answer: "Yes, we serve Celbridge and all of North Kildare. Our team regularly works in the area and provides free site surveys at your convenience." },
    ],
  },
];

const services = [
  { icon: "window", title: "Windows Installation", slug: "windows-installation", desc: "Expert fitting of high-quality, energy-efficient windows tailored to your home." },
  { icon: "autorenew", title: "Windows Replacement", slug: "windows-replacement", desc: "Upgrade old windows with modern, secure, and draught-proof solutions." },
  { icon: "door_front", title: "Doors Installation", slug: "doors-installation", desc: "Beautiful entryways providing maximum security and kerb appeal." },
  { icon: "meeting_room", title: "Doors Replacement", slug: "doors-replacement", desc: "Replace worn-out doors with durable composite or PVC alternatives." },
];

export async function generateStaticParams() {
  return allAreas.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = allAreas.find(a => a.slug === slug);
  if (!area) return {};
  const url = `${BASE_URL}/areas/${slug}`;
  return {
    title: `Windows and Doors ${area.name} | Installation & Replacement`,
    description: area.description,
    alternates: { canonical: url },
    openGraph: {
      title: `Windows and Doors ${area.name} | Installation & Replacement`,
      description: area.description,
      url,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = allAreas.find(a => a.slug === slug);
  if (!area) notFound();

  const otherAreas = allAreas.filter(a => a.slug !== slug).slice(0, 8);
  const url = `${BASE_URL}/areas/${slug}`;
  const breadcrumbItems = [
    { name: "Home", url: BASE_URL },
    { name: "Areas", url: `${BASE_URL}/areas` },
    { name: area.name, url },
  ];

  return (
    <>
      <JsonLd data={makeLocalBusinessSchema()} />
      <JsonLd data={makeBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={makeFAQSchema(area.faqs)} />
      <Header />

      {/* Hero */}
      <section className="bg-soft-violet py-12 lg:py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: "Areas", href: "/areas/swords" }, { name: area.name }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                Windows and Doors <span className="text-primary">{area.name}</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 max-w-lg">
                Professional windows and doors installation, replacement and repair in {area.name} {area.landmarks}. Trusted local expertise with premium materials and competitive pricing.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all inline-block">
                  Get Free Quote Today
                </Link>
                <a href="tel:087777777" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-primary hover:text-white inline-flex items-center gap-2">
                  <span className="material-symbols-outlined">call</span> 087 777 777
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">verified</span> 10 Year Guarantee</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">sell</span> Free Quotes</span>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-full h-[400px] rounded-2xl bg-slate-300 overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" alt={`Professional windows and doors installation in ${area.name} - UPVC windows, composite doors, double glazing`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75kYAZ4NZsRVenEHQvbbsF3Za7mby-ZJtY4teLomFMiSnc2O7r0C4uCa8tU-_beWS9U5VXQGa0f5ooWDaldOOjFR8_U24yoWu7Z9F2pwoiCtMwCLykzpLc8E_vyxwyt47jeRbgHOiCDe4MBWr0IzuW8TS6_35g8dho0D910NzXPdcFMM61B_aYaLGl1mVsP_h0wgIC12luEpocb9mnEEYI_2c3Kgldn8TpglP3QoytHG7Mm7nebk9lS8rrd3As0KJS7kFyYVpabg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-charcoal leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-900 pb-2">Expert Windows and Doors in {area.name}</h2>
            {area.content.map((p, i) => <p key={i}>{p}</p>)}
            <p>Ready to upgrade your {area.name} home? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us today</Link> for a free, no-obligation survey and quote. You can also explore our full range of <Link href="/services/windows-installation" className="text-primary font-semibold hover:underline">window installation</Link>, <Link href="/services/doors-installation" className="text-primary font-semibold hover:underline">door installation</Link>, and <Link href="/services/doors-replacement" className="text-primary font-semibold hover:underline">repair services</Link>.</p>
          </div>
          <div className="rounded-xl overflow-hidden bg-slate-200 aspect-square">
            <img className="w-full h-full object-cover" alt={`Quality windows and doors fitted in ${area.name} home - energy efficient double glazing`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuATzZfhxmGhSjCelhzmBaw8_1SwBmHcko2pLZzd0Qu4di8QktlVtFZR3W4XfSu9QY3jlExUGqYDRbZa3PMFpf7Xe5Jzz95IdKRRQj9xtGlwwtsN8q_iOm_0bANryh9qELc4xu46GamIY1A9oit1pSpqyA4xxm4ERtmbhBsyiFJZgYJhcx-Seoabu4vYW0bCd4__Zj9yVO6wZpt4Xuel7etG6IWxUJ4rVllvNEOd3__BVOKukxo0Tq56mLiqysJ-FDUUcg-Dtt_nggc" />
          </div>
        </div>
      </section>

      {/* Services */}
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

      {/* FAQ */}
      {area.faqs.length > 0 && (
        <section className="py-20 px-6 lg:px-20 bg-background-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">FAQs — Windows and Doors {area.name}</h2>
            <div className="space-y-6">
              {area.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Local */}
      <section className="bg-soft-violet py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Windows and Doors Dublin for {area.name}?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "timer", title: "Quick Response Times", desc: `Based in Dublin 12, we provide fast free surveys and efficient installation timelines for ${area.name} residents.` },
              { icon: "location_city", title: "Local Knowledge", desc: `We understand the building styles and regulations common in ${area.name}, ensuring a perfect fit every time.` },
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
