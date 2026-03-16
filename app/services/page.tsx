import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Windows and Doors Dublin",
  description: "Professional window and door installation, replacement and repair services across Dublin. UPVC, aluminium, composite doors and more. Free quotes.",
};

const services = [
  {
    icon: "window",
    title: "Windows Installation",
    slug: "windows-installation",
    desc: "Expert fitting of high-quality, energy-efficient windows for new builds and extensions. UPVC, aluminium, sash and triple glazing options available.",
  },
  {
    icon: "autorenew",
    title: "Windows Replacement",
    slug: "windows-replacement",
    desc: "Upgrade your old, draughty windows with modern double or triple glazed units. Improved insulation, security and kerb appeal guaranteed.",
  },
  {
    icon: "door_front",
    title: "Doors Installation",
    slug: "doors-installation",
    desc: "Beautiful entryways that combine maximum security with stunning design. Composite, UPVC, and aluminium options for every home.",
  },
  {
    icon: "meeting_room",
    title: "Doors Replacement",
    slug: "doors-replacement",
    desc: "Replace worn-out doors with durable, stylish alternatives. Improved thermal performance and security for front, back and patio doors.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From windows to doors, installation to replacement — we deliver expert craftsmanship across Dublin.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-slate-50 rounded-xl p-8 hover:bg-primary hover:text-white transition-all duration-200 border border-slate-100 hover:border-primary hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-primary text-4xl group-hover:text-white transition-colors mb-4 block">
                  {s.icon}
                </span>
                <h2 className="text-xl font-bold mb-2">{s.title}</h2>
                <p className="text-slate-500 group-hover:text-white/80 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:text-white mt-4 font-medium">
                  Learn more
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
