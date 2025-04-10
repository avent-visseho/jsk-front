export const generateMetadata = (
  title = "SK Opinions - Informer, Contribuer, Transmettre",
  description = "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire",
  image = "/favicon.ico",
  path = "/",
) => {
  const metadataConfig = {
    twitter: "@koboude",
    email: "contact@jsk-opinions.com",
    appleTouchIcon: "/assets/imgs/favicon_io/apple-touch-icon.png",
    fullUrl : `https://jsk-opinions.com${path}`

  };

  return {
    robots: "follow, index",
    title: title,
    description: description,
    keywords: [
      "JSK blogs",
      "JSK tribunes",
      "jsk blog",
      "jsk opinions",
      "jsk",
      "jsk analyse",
      "jsk chronique",
      "jsk histoire",
      "jsk économie",
      "jsk politique",
      "jsk articles",
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
      url: metadataConfig.fullUrl,
      siteName: "JSK Opinions",
      type: "website",
      images: [
        { url: image, width: 256, height: 256, alt: "favicon" },
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
        { url: image, width: 256, height: 256, alt: "favicon" },
      ],
    },
    author: "Jed Sophonie Koboude",
    email: metadataConfig.email,
    contact: {
      email: metadataConfig.email,
    },
    icons: {
      icon: image,
      apple: metadataConfig.appleTouchIcon,
    },
    themeColor: "#ffffff",
    robotsMeta: "index, follow",
    metadataBase: new URL("https://jsk-opinions.com"),
    alternates: {
      canonical: metadataConfig.fullUrl,
    },
  };
};
