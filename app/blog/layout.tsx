import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata(
  "Blog | JSK Opinions Informer, Contribuer, Transmettre",
  "Découvrez nos derniers articles, analyses et chroniques sur l'Afrique, l'économie et l'histoire.",
  "/favicon.ico",
  "/blog"
);

export default function BlogLayout({ children }: any) {
  return children;
}
