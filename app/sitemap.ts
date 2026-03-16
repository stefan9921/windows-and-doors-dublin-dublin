import { MetadataRoute } from "next";

const BASE_URL = "https://windows-and-doors-dublin-dublin-stefan9921s-projects.vercel.app";

const services = ["windows-installation", "windows-replacement", "doors-installation", "doors-replacement"];
const areas = ["swords", "naas", "navan", "mullingar", "tallaght", "drogheda", "lucan", "bray", "dun-laoghaire", "ashbourne", "blanchardstown", "dundrum", "celbridge"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map(slug => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map(slug => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
