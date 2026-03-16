"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">door_front</span>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
              Windows and Doors <span className="text-primary">Dublin</span>
            </h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/services/windows-installation">Services</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/areas/swords">Areas</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Call Us Now</span>
              <a className="text-sm font-bold text-slate-900" href="tel:087777777">087 777 777</a>
            </div>
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md">
              Get Free Quote
            </Link>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link className="text-sm font-semibold hover:text-primary" href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link className="text-sm font-semibold hover:text-primary" href="/services/windows-installation" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link className="text-sm font-semibold hover:text-primary" href="/areas/swords" onClick={() => setMobileOpen(false)}>Areas</Link>
            <Link className="text-sm font-semibold hover:text-primary" href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link className="text-sm font-semibold hover:text-primary" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
