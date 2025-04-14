import type { Metadata } from "next";
import React from "react";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";
import { getSinglePost } from "@/services/DataService";
import { formatPostName } from "@/helpers/utils";

// Pour une page avec des paramètres de requête comme /blog/article?title=xxx&q=yyy
export async function generateMetadata(){
  
    return baseGenerateMetadata(
      "Articles | JSK Opinions - Informer, Contribuer, Transmettre",
      "Découvrez nos articles sur JSK Opinions",
      "https://jsk-opinions.com/_next/static/media/jed.3ecfcfab.png",
      "/blog/article"
    );
 
  
  /* try {
    // Récupérer l'article par ID plutôt que par slug
    const article:any = await getSinglePost(articleId);
    
    return baseGenerateMetadata(
      article.title,
      article.content,
      process.env.NEXT_PUBLIC_FILE_URL + "/" + article.coverImage,
      `/blog/article?title=${formatPostName(article?.title)}&q=${article?.id}`
    );
  } catch (error) {
    console.error("Error fetching article metadata:", error);
    
    return baseGenerateMetadata(
      "Article - JSK Opinions",
      "Découvrez nos articles sur JSK Opinions",
      "/favicon.ico",
      "/blog/article"
    );
  } */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}