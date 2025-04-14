import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata(
  "Publications | JSK Opinions - Informer, Contribuer, Transmettre",
  "Découvrez les livres, articles et tribunes publiés par Jed Sophonie Koboude.",
  "/favicon.ico",
  "/publications"
);

export default function BlogLayout({ children }: any) {
  return children;
}
