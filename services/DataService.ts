import axios from "./api";

async function getIpAddress(): Promise<string> {
  try {
    // Option 1: Using ipify API (gratuit mais limité)
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;

    // Alternative:
    // const response = await fetch('https://api.ipdata.co?api-key=VOTRE_CLE_API');
  } catch (error) {
    console.error("Erreur lors de la récupération de l'IP:", error);
    return "";
  }
}

export const getArticles = () => {
  return axios.get(`/articles`);
};
export const getSource = () => {
  return axios.get(`/source`);
};
export const getCategories = () => {
  return axios.get(`/category`);
};
export const getIntervention = (page: number = 1, limit: number = 10) => {
  return axios.get(`/intervention?limit=${limit}&page=${page}`);
};
export const getTribunes = (page: number = 1, limit: number = 10) => {
  return axios.get(`/tribune?limit=${limit}&page=${page}`);
};
export const getBook = (page: number = 1, limit: number = 10) => {
  return axios.get(`/book?limit=${limit}&page=${page}`);
};

export const fullSearch = (
  target: "tribune" | "intervention" | "book" | "post",
  query: string = "",
  page: number = 1,
  limit: number = 10
) => {
  return axios.get(
    `/app/full-search?target=${target}&q=${query}&limit=${limit}&page=${page}`
  );
};
export const getPost = (page: number = 1, limit: number = 10) => {
  return axios.get(`/post/all-published?page=${page}&limit=${limit}`);
};
export const getSinglePost = (id: string) => {
  return axios.get(`/post/${id}`);
};
export const readPost = (id: string) => {
  return axios.patch(`/post/${id}/read`);
};
export const subscribeEmail = (data: { email: string }) => {
  return axios.post(`/newsletter/subscribe`, data);
};
export const searchPost = (
  query?: string,
  page: number = 1,
  limit: number = 10,
  dateFrom: string = "",
  dateTo: string = "",
  categories: string = ""
) => {
  return axios.get(
    `/post/search?q=${query}&page=${page}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}&categories=${categories}`
  );
};
export const postContact = (data: any) => {
  return axios.post(`/contact`, data);
};
export const postNewsletter = (data: any) => {
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
export const getHeadlined = async () => {
  let data: any[] = [];
  const bookResponse = await axios.get("/book/headlined/get");
  bookResponse.data.data.forEach((element: any) => {
    data.push({ ...element, type: "book" });
  });
  const tribuneResponse = await axios.get("/tribune/headlined/get");
  tribuneResponse.data.data.forEach((element: any) => {
    data.push({ ...element, type: "tribune" });
  });
  return data;
};

/* const DataService = { postContact, postHistory };
export default DataService;
 */
