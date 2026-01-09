import type { Metadata } from "next";
import React, { use } from "react";
import {
  generateMetadata as baseGenerateMetadata,
  cleanHtmlContent,
} from "@/utils/metadata";
import { getSinglePost } from "@/services/DataService";
import { slugify } from "@/helpers/utils";

// Pour une page avec des paramètres de requête comme /blog/article?title=xxx&q=yyy
export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string; id: string }>;
}) {
  const { name, id } = await params;

  try {
    // Récupérer l'article par ID plutôt que par slug
    const res: any = await getSinglePost(id);
    const article = res.data.data;
    const imageUrl = article.coverImage
      ? `${process.env.NEXT_PUBLIC_FILE_URL}/${article.coverImage}`
      : "/favicon.ico";
    let metaDescription = "";
    if (article.content) {
      metaDescription = cleanHtmlContent(article.content, 260);
    } else {
      metaDescription = `Découvrez l'article "${article.title}" sur JSK Opinions`;
    }
    return baseGenerateMetadata(
      article.title,
      metaDescription,
      imageUrl,
      `/blog/article/${slugify(article?.title)}/${article?.id}`,
      "article",
      article.publishedAt ?? new Date().toISOString()
    );
  } catch (error) {
    console.error("Error fetching article metadata:", error);

    return baseGenerateMetadata(
      "Article - JSK Opinions",
      "Découvrez nos articles sur JSK Opinions",
      "/favicon.ico",
      "/blog/article",
      "article"
    );
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
