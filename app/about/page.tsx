import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Windows and Doors Dublin | Our Story",
  description: "Learn about Windows and Doors Dublin — over 15 years of experience providing professional window and door services across Dublin.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="bg-soft-violet py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">About Windows and Doors Dublin</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">Over 15 years of trusted service delivering premium window and door solutions across the greater Dublin area.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-charcoal leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p>Windows and Doors Dublin was founded with a simple mission: to provide Dublin homeowners with the highest quality window and door solutions at fair, transparent prices. What started as a small family operation has grown into one of Dublin&apos;s most trusted names in the glazing industry.</p>
            <p>Our team of certified professionals brings decades of combined experience to every project. We believe that every home deserves windows and doors that not only look beautiful but perform exceptionally — keeping families warm, safe, and comfortable throughout the Irish seasons.</p>
            <p>Based at UNIT 3, 4 John F Kennedy Park in Dublin 12, we serve the entire greater Dublin area and surrounding counties. Our commitment to quality craftsmanship, premium materials, and outstanding customer service has earned us hundreds of satisfied customers and countless referrals.</p>
          </div>
          <div className="space-y-6">
            {[
              { icon: "workspace_premium", title: "15+ Years Experience", desc: "Trusted expertise built over more than a decade of successful projects." },
              { icon: "groups", title: "Expert Team", desc: "Fully certified and insured professionals who treat your home with care." },
              { icon: "verified", title: "Quality Guaranteed", desc: "All our work is backed by comprehensive warranties for your peace of mind." },
              { icon: "handshake", title: "Customer First", desc: "We build lasting relationships through honest advice and exceptional service." },
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
      <CTABanner title="Want to Work With Us?" subtitle="Get in touch today for a free, no-obligation quote on your window or door project." />
      <Footer />
    </>
  );
}
