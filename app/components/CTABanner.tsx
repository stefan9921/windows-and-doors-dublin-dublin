import Link from "next/link";

export default function CTABanner({ title = "Ready to Transform Your Home?", subtitle = "Join hundreds of satisfied homeowners in Dublin. Get a free, no-obligation survey and quote today." }: { title?: string; subtitle?: string }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
        <h2 className="text-4xl font-black text-white mb-6 relative z-10">{title}</h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">{subtitle}</p>
        <Link href="/contact" className="bg-white text-primary hover:bg-slate-50 px-10 py-4 rounded-xl font-black text-lg transition-all shadow-lg relative z-10 inline-block">
          Get My Free Quote
        </Link>
      </div>
    </section>
  );
}
