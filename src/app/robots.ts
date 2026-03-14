import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "CCBot", "anthropic-ai"],
        allow: "/",
      },
    ],
    sitemap: "https://www.tinkkocoworking.com/sitemap.xml",
    host: "https://www.tinkkocoworking.com",
  };
}
