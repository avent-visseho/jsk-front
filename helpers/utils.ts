import moment from "moment";
import "moment/locale/fr";

export const formatPublishedDate = (date: string) => {
  moment.locale("fr");
  return moment(date).format("LL");
};

export const formatPostName = (name: string): string => {
  return name.replace(/[\s'_]/g, "-").toLocaleLowerCase();
};
