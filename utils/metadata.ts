export const generateMetadata = (
  title = "SK Opinions - Informer, Contribuer, Transmettre",
  description = "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire"
) => {
  const metadataConfig = {
    title,
    description,
    url: "https://jsk-opinions.com/",
    image: "/favicon.ico",
    twitter: "@koboude",
    email: "contact@jsk-opinions.com",
    keywords:
      "JSK Opinions, Jed Sophonie Koboude, analyse, chronique, Afrique, économie, histoire, chroniques, analyses, histoire, politique, articles, opinions",
  };

  return {
    metadataBase: new URL(metadataConfig.url),
    robots: "follow, index",
    title: metadataConfig.title,
    description: metadataConfig.description,
    icons: {
      icon: metadataConfig.image,
    },    
    keywords: metadataConfig.keywords,
    openGraph: {
      title: metadataConfig.title,
      type: "website",
      description: metadataConfig.description,
      url: metadataConfig.url,
      images: [
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataConfig.title,
      description: metadataConfig.description,
      site: metadataConfig.twitter,
      creator: metadataConfig.twitter,
      images: [
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
      ],
    },
    contact: {
      email: metadataConfig.email,
    },
  };
};
