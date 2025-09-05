 const seoConfig = {
    defaultTitle: "SK Opinions - Informer, Contribuer, Transmettre",
    titleTemplate: "%s | JSK Opinions",
    defaultDescription: "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire",
    canonical: "https://jsk-opinions.com",
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: "https://jsk-opinions.com",
      siteName: "JSK Opinions",
      title: "SK Opinions - Informer, Contribuer, Transmettre",
      description: "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire",
      images: [
        {
          url: "/assets/imgs/jed/blogs/jed.png",
          width: 1200,
          height: 630,
          alt: "JSK Opinions",
        },
        {
          url: "/favicon.ico",
          width: 256,
          height: 256,
          alt: "favicon",
        },
      ],
    },
    twitter: {
      handle: "@koboude",
      site: "@koboude",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "author",
        content: "Jed Sophonie Koboude",
      },
      {
        name: "keywords",
        content: "JSK blog, JSK opinions, JSK tribunes, jsk, jsk analyse, jsk chronique, jsk histoire, jsk économie, jsk politique, jsk articles, JSK Opinions, Jed Sophonie Koboude, analyse, chronique, Afrique, économie, histoire, chroniques, analyses, histoire, politique, articles, opinions",
      },
      {
        name: "email",
        content: "contact@jsk-opinions.com",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/assets/imgs/favicon_io/apple-touch-icon.png",
      },
    ],
  };

  export default seoConfig