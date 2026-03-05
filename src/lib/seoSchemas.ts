export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vittiva Coworking",
    url: "https://www.vittivacoworking.com",
    logo: "https://www.vittivacoworking.com/favicon.png",
    sameAs: [
      "https://www.instagram.com",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vittiva Coworking",
    url: "https://www.vittivacoworking.com",
    inLanguage: ["en", "es"],
  };
}

export function getFaqPageSchema(
  entries: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  language?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: params.image ?? "https://www.vittivacoworking.com/assets/hero/dashboard.png",
    inLanguage: params.language ?? "en",
    author: {
      "@type": "Organization",
      name: "Vittiva Coworking",
    },
    publisher: {
      "@type": "Organization",
      name: "Vittiva Coworking",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vittivacoworking.com/favicon.png",
      },
    },
  };
}
