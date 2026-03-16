import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Windows and Doors Dublin",
  description: "Privacy policy for Windows and Doors Dublin. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="bg-soft-violet py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We collect information you provide directly to us, such as your name, email address, phone number, and address when you request a quote or contact us. We also collect usage data through cookies and similar technologies when you visit our website.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect to respond to your enquiries, provide quotes, schedule installations, improve our services, and communicate with you about our products and services.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Under GDPR, you have the right to access, rectify, erase, or restrict the processing of your personal data. You may also withdraw consent at any time. Contact us at windowsanddoorsdublin@gmail.com to exercise your rights.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mb-4">If you have questions about this Privacy Policy, please contact us at:<br />Windows and Doors Dublin<br />UNIT 3, 4 John F Kennedy Park, Dublin 12<br />Email: windowsanddoorsdublin@gmail.com<br />Phone: 087 777 777</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
