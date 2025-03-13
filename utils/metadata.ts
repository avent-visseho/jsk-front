export const generateMetadata = (
  title = "SK Opinions - Informer, Contribuer, Transmettre",
  description = "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire"
) => {
  const metadataConfig = {
    title,
    description,
    image: "/favicon.ico",
    twitter: "@koboude",
    email: "contact@jsk-opinions.com",
    appleTouchIcon:"/assets/imgs/favicon_io/apple-touch-icon.png"
  };

  return {
    robots: "follow, index",
    title: title,
    description: description,
    keywords: [
      "JSK Opinions",
      "Jed Sophonie Koboude",
      "analyse",
      "chronique",
      "Afrique",
      "économie",
      "histoire",
      "chroniques",
      "analyses",
      "histoire",
      "politique",
      "articles",
      "opinions",
    ],
    openGraph: {
      title: title,
      description: description,
      url: "https://jsk-opinions.com",
      siteName: "JSK Opinions",
      type: "website",
      images: [
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
        {
          url: "/assets/imgs/jed/blogs/jed.png",
          width: 1200,
          height: 630,
          alt: "JSK Opinions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@koboude",
      title: title,
      description: description,
      creator: "@koboude",
      images: [
        "/assets/imgs/jed/blogs/jed.png",
        { url: metadataConfig.image, width: 256, height: 256, alt: "favicon" },
      ],
    },
    author: "Jed Sophonie Koboude",
    email: metadataConfig.email,
    contact: {
      email: metadataConfig.email,
    },
    icons: {
      icon: metadataConfig.image,
      apple: metadataConfig.appleTouchIcon,
    },
    themeColor: "#ffffff",
    robotsMeta: "index, follow",
    metadataBase: new URL("https://jsk-opinions.com"),
    alternates: {
      canonical: "/",
    },
  };
};
