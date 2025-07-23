import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://cholo-kotha-boli-backend.vercel.app/api",
    withCredentials: true,
})