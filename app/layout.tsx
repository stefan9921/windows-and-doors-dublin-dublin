import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows and Doors Dublin | Professional Window & Door Services",
  description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services. Free quotes. Call 087777777.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className="bg-background-light font-display text-slate-900">
        {children}
      </body>
    </html>
  );
}
