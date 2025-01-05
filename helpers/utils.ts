import moment from "moment";
import "moment/locale/fr";

export const formatPublishedDate = (date: string) => {
  moment.locale("fr");
  return moment(date).format("LL");
};

export const formatPostName = (name: string): string => {
  return name.replace(/[\s'_]/g, "-").toLocaleLowerCase();
};

export const getEmbedUrl = (url: string) => {
  // Vérifier si l'URL est déjà au format embed
  if (url.includes("youtube.com/embed/")) {
    return url; // Si l'URL est déjà au format embed, la retourner telle quelle
  }

  // Vérifier si l'URL est valide et extraire l'ID de la vidéo
  const isValidUrl =
    /^https:\/\/(www\.)?youtube\.com\/(?:watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/.test(
      url
    );
  if (!isValidUrl) {
    return "URL non valide"; // Si l'URL n'est pas valide, retourner un message d'erreur
  }
  const videoId = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
};
