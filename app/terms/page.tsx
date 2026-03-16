import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Windows and Doors Dublin",
  description: "Terms and conditions for Windows and Doors Dublin services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <section className="bg-soft-violet py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Terms &amp; Conditions</h1>
          <p className="text-slate-600">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Windows and Doors Dublin provides window and door installation, replacement, and repair services across the Dublin area. All services are subject to a site survey and formal quotation.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Quotations</h2>
          <p className="text-slate-600 leading-relaxed mb-4">All quotations are valid for 30 days from the date of issue. Prices are inclusive of VAT at the prevailing rate. A deposit may be required upon acceptance of a quotation.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Warranties</h2>
          <p className="text-slate-600 leading-relaxed mb-4">All installations come with a minimum 10-year manufacturer warranty on products and a 2-year workmanship guarantee. Warranties are subject to proper use and maintenance.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Payment is due upon completion of installation unless otherwise agreed in writing. We accept bank transfer, cheque, and card payments.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cancellation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">You may cancel an order within 14 days of acceptance. Custom-made products are non-refundable once manufacturing has commenced.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Liability</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Windows and Doors Dublin carries full public liability insurance. We are not liable for any indirect or consequential losses arising from our services.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact</h2>
          <p className="text-slate-600 leading-relaxed mb-4">For questions about these terms, contact us at:<br />Windows and Doors Dublin<br />UNIT 3, 4 John F Kennedy Park, Dublin 12<br />Email: windowsanddoorsdublin@gmail.com<br />Phone: 087 777 777</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
