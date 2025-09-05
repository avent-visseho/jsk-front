import type { Metadata } from "next";
import React, { use } from "react";
import { generateMetadata as baseGenerateMetadata } from "@/utils/metadata";
import { getSinglePost } from "@/services/DataService";
import { formatPostName } from "@/helpers/utils";

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

    return baseGenerateMetadata(
      article.title,
      article.content,
      process.env.NEXT_PUBLIC_FILE_URL + "/" + article.coverImage,
      `/blog/article/${formatPostName(article?.title)}/${article?.id}`
    );
  } catch (error) {
    console.error("Error fetching article metadata:", error);

    return baseGenerateMetadata(
      "Article - JSK Opinions",
      "Découvrez nos articles sur JSK Opinions",
      "/favicon.ico",
      "/blog/article"
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
