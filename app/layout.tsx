import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows and Doors Dublin | Professional Window & Door Services",
  description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services. Free quotes. Call 087777777.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background-light font-display text-slate-900">
        {children}
      </body>
    </html>
  );
}
