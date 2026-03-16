import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://windows-and-doors-dublin-dublin-stefan9921s-projects.vercel.app/sitemap.xml",
  };
}
