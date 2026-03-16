import Link from "next/link";

const areas = [
  { name: "Swords", slug: "swords" },
  { name: "Tallaght", slug: "tallaght" },
  { name: "Lucan", slug: "lucan" },
  { name: "Blanchardstown", slug: "blanchardstown" },
  { name: "Dún Laoghaire", slug: "dun-laoghaire" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-white text-2xl">door_front</span>
              <h2 className="text-xl font-black tracking-tight">Windows and Doors Dublin</h2>
            </div>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-white">pin_drop</span>
                <span>UNIT 3, 4 John F Kennedy Park,<br />Dublin 12, Ireland</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-white">call</span>
                <a className="hover:text-white transition-colors" href="tel:087777777">087 777 777</a>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-white">schedule</span>
                <span>Mon - Fri: 8:00 - 18:00<br />Sat: 9:00 - 14:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link className="hover:text-white transition-colors" href="/services/windows-installation">Windows Installation</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/services/windows-replacement">Windows Replacement</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/services/doors-installation">Doors Installation</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/services/doors-replacement">Doors Replacement</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Areas</h4>
            <ul className="space-y-3 text-white/70">
              {areas.map(a => (
                <li key={a.slug}><Link className="hover:text-white transition-colors" href={`/areas/${a.slug}`}>{a.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link className="hover:text-white transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Windows and Doors Dublin. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-white" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
