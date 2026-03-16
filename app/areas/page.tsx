import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Windows and Doors Dublin",
  description: "Professional window and door installation across Dublin and surrounding areas including Swords, Tallaght, Bray, Dún Laoghaire, Blanchardstown and more.",
};

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

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Serve</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Professional window and door services across Dublin and the greater Leinster region. Find your local team below.
            </p>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group block bg-slate-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all duration-200 border border-slate-100 hover:border-primary hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white transition-colors">
                      location_on
                    </span>
                    <h2 className="text-lg font-semibold">{area.name}</h2>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 mt-2">
                    Windows & doors services in {area.name}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:text-white mt-3 font-medium">
                    View details
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
