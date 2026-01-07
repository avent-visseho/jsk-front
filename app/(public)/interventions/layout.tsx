import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata(
  "Interventions | JSK Opinions Informer, Contribuer, Transmettre",
  "Découvrez les interventions de Jed Sophonie Koboude : radio, podcasts, conférences et modération.",
  "/favicon.ico",
  "/interventions"
);

export default function BlogLayout({ children }: any) {
  return children;
}
