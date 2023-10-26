import axios from "axios";
import { POST_DATA } from "../store/posts/actionTypes";

//apply base url for axios
const REACT_APP_APP_URL = "https://64b5057cf3dbab5a95c68888.mockapi.io";

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axiosApi.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// export async function getPosts() {
//   try {
//     const response = await axios.get(
//       "https://64b5057cf3dbab5a95c68888.mockapi.io/formData"
//     );
//     return response.data;
//   } catch (error) {
//     throw error; // You can handle errors in your saga
//   }
// }

export async function getPosts() {
  return await axiosApi.get("/formData").then((response) => response.data);
}
