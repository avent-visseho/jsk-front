import axios from "./api";

async function getIpAddress(): Promise<string> {
    console.log('====================================');
    try {
    // Option 1: Using ipify API (gratuit mais limité)
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    console.log("log")
    console.log(data);
    console.log('====================================');
    return data.ip;

    // Option 2: Alternative - utiliser un service comme:
    // const response = await fetch('https://api.ipdata.co?api-key=VOTRE_CLE_API');
  } catch (error) {
    console.error("Erreur lors de la récupération de l'IP:", error);
    return "";
  }
}

export const getArticles = () => {
  return axios.get(`/articles`);
};
export const postContact = (data: any) => {
  return axios.post(`/contact`, data);
};
export const postHistory = async (pathname: string) => {
  const ipAddress = await getIpAddress();
  const userAgent = window.navigator.userAgent;

  return axios
    .post(`/visitors/track`, {
      pageUrl: pathname || "/",
      ipAddress,
      userAgent,
    })
    .catch((error) => {
      console.error("Erreur lors du tracking:", error);
    });
};

const DataService = { postContact, postHistory };
export default DataService;
