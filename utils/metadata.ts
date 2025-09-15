export const generateMetadata = (
  title = "JSK Opinions - Informer, Contribuer, Transmettre",
  description = "Plateforme d'expression libre animée par Jed Sophonie Koboude. Découvrez des analyses et des chroniques sur l'Afrique, l'économie et l'histoire",
  image = "/favicon.ico",
  path = "/",
  openGraphTitle: "website" | "article" = "website",
  publishedAt: string = new Date().toISOString()
) => {
  const metadataConfig = {
    twitter: "@koboude",
    email: "contact@jsk-opinions.com",
    appleTouchIcon: "/assets/imgs/favicon_io/apple-touch-icon.png",
    fullUrl: `https://jsk-opinions.com${path}`,
  };
  const getImageType = (imageUrl: string) => {
    if (imageUrl.toLowerCase().includes(".png")) return "image/png";
    if (imageUrl.toLowerCase().includes(".webp")) return "image/webp";
    return "image/jpeg";
  };

  return {
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
      "Jed",
      "Sophonie",
      "Koboude",
      "Jed Sophonie",
    ],
    authors: [{ name: "Jed Sophonie Koboude" }],
    creator: "Jed Sophonie Koboude",
    publisher: "Jed Sophonie Koboude",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: openGraphTitle,
      title: title,
      description: description,
      url: metadataConfig.fullUrl,
      siteName: "JSK Opinions",
      locale: "fr_FR",
      images: [
        // { url: image, width: 256, height: 256, alt: "favicon" },
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: getImageType(image),
        },
      ],
      image: image,
      ...(openGraphTitle === "article" && {
        authors: ["Jed Sophonie Koboude"],
        publishedTime: new Date(publishedAt).toISOString(),
        section: "Blog",
      })
    },
    twitter: {
      card: "summary_large_image",
      site: "@koboude",
      creator: "@koboude",
      title: title,
      description: description,
      images: [image],
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
    robotsMeta: "index, follow",
    metadataBase: new URL("https://jsk-opinions.com"),
    alternates: {
      canonical: metadataConfig.fullUrl,
    },
  };
};

// Fonction pour nettoyer le contenu HTML
export const cleanHtmlContent = (html: string, maxLength: number = 160): string => {
  if (!html) return "";
  
  // Supprimer les balises HTML
  const cleaned = html.replace(/<[^>]*>/g, '');
  
  // Nettoyer les entités HTML courantes
  const entities = cleaned
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
    
  // Limiter la longueur
  return entities.length > maxLength 
    ? entities.substring(0, maxLength).trim() + "..."
    : entities.trim();
};