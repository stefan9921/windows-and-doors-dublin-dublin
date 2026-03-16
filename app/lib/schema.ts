const BASE_URL = "https://windows-and-doors-dublin-dublin-stefan9921s-projects.vercel.app";

export const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Windows and Doors Dublin",
  image: `${BASE_URL}/og-image.png`,
  url: BASE_URL,
  telephone: "087777777",
  email: "windowsanddoorsdublin@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "UNIT 3, 4 John F Kennedy Park, John F Kennedy Industrial Estate",
    addressLocality: "Dublin 12",
    addressRegion: "Dublin",
    postalCode: "D12 FR82",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3244,
    longitude: -6.3400,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  priceRange: "€€",
  areaServed: {
    "@type": "City",
    name: "Dublin",
  },
};

export function makeWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Windows and Doors Dublin",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function makeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    ...localBusiness,
  };
}

export function makeBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function makeServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: { "@type": "City", name: "Dublin" },
  };
}

export function makeFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { BASE_URL };
