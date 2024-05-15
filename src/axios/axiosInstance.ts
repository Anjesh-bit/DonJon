import axios from "axios";
const baseURL = "https://www.dnd5eapi.co/api/"; // or process.env
const axiosInstance = axios.create({ baseURL });
export default axiosInstance;
