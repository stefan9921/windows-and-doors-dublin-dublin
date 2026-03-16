import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";
import { Metadata } from "next";
import { makeBreadcrumbSchema, makeLocalBusinessSchema, BASE_URL } from "../lib/schema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Windows and Doors Dublin | Our Story",
  description: "Learn about Windows and Doors Dublin — over 15 years of experience providing professional window and door installation, replacement and repair across Dublin.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Windows and Doors Dublin | Our Story",
    description: "Over 15 years of trusted window and door services across Dublin.",
    url: `${BASE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={makeLocalBusinessSchema()} />
      <JsonLd data={makeBreadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "About", url: `${BASE_URL}/about` },
      ])} />
      <Header />

      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[{ name: "About" }]} />
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">About Windows and Doors Dublin</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Over 15 years of trusted service delivering premium window and door solutions across the greater Dublin area and surrounding counties.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-charcoal leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p>Windows and Doors Dublin was founded with a simple mission: to provide Dublin homeowners with the highest quality window and door solutions at fair, transparent prices. What started as a small family operation has grown into one of Dublin&apos;s most trusted names in the glazing and door fitting industry.</p>
            <p>Our team of certified professionals brings decades of combined experience to every project. We believe that every home deserves windows and doors that not only look beautiful but perform exceptionally — keeping families warm, safe, and comfortable throughout the Irish seasons. From <Link href="/services/windows-installation" className="text-primary font-semibold hover:underline">UPVC window installation</Link> to <Link href="/services/doors-installation" className="text-primary font-semibold hover:underline">composite door fitting</Link>, we handle it all.</p>
            <p>Based at UNIT 3, 4 John F Kennedy Park in Dublin 12, we serve the entire greater Dublin area and surrounding counties including Kildare, Meath, Wicklow, and Louth. Our commitment to quality craftsmanship, premium materials, and outstanding customer service has earned us hundreds of satisfied customers and countless referrals.</p>

            <h2 className="text-3xl font-bold text-slate-900 pt-4">Our Values</h2>
            <p><strong>Quality First:</strong> We never compromise on materials or workmanship. Every window and door we install meets the highest Irish and European standards for energy efficiency, security, and durability.</p>
            <p><strong>Honest Pricing:</strong> No hidden charges, no pressure tactics. We provide transparent, itemised quotes and always recommend the most cost-effective solution for your needs — whether that&apos;s a <Link href="/services/windows-replacement" className="text-primary font-semibold hover:underline">repair or full replacement</Link>.</p>
            <p><strong>Customer Care:</strong> From your first phone call to the final quality check, we treat every customer with respect and professionalism. Our aftercare programme ensures your investment is protected for years to come.</p>
          </div>
          <div className="space-y-6">
            {[
              { icon: "workspace_premium", title: "15+ Years Experience", desc: "Trusted expertise built over more than a decade of successful window and door projects across Dublin." },
              { icon: "groups", title: "Expert Team", desc: "Fully certified and insured professionals specialising in all types of windows and doors." },
              { icon: "verified", title: "Quality Guaranteed", desc: "All installations backed by comprehensive 10-year product and 2-year workmanship warranties." },
              { icon: "handshake", title: "Customer First", desc: "We build lasting relationships through honest advice, fair pricing, and exceptional service." },
              { icon: "eco", title: "Energy Efficient", desc: "We specialise in A-rated energy-efficient glazing that reduces bills and carbon footprint." },
              { icon: "location_on", title: "Locally Based", desc: "Proudly based in Dublin 12, serving all of Dublin and surrounding counties with fast response." },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-6 bg-background-light rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Want to Work With Us?" subtitle="Get in touch today for a free, no-obligation quote on your window or door project anywhere in Dublin." />
      <Footer />
    </>
  );
}
