import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { makeWebsiteSchema, makeLocalBusinessSchema } from "./lib/schema";

const BASE_URL = "https://windows-and-doors-dublin-dublin-stefan9921s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Windows and Doors Dublin | Professional Window & Door Services",
    template: "%s | Windows and Doors Dublin",
  },
  description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services. Free quotes. Call 087777777.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: BASE_URL,
    siteName: "Windows and Doors Dublin",
    title: "Windows and Doors Dublin | Professional Window & Door Services",
    description: "Leading windows and doors company in Dublin. Professional installation, replacement and repair services. Free quotes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windows and Doors Dublin",
    description: "Professional window & door installation, replacement and repair across Dublin.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <JsonLd data={makeWebsiteSchema()} />
        <JsonLd data={makeLocalBusinessSchema()} />
        {children}
      </body>
    </html>
  );
}
