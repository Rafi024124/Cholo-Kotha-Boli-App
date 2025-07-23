import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://localhpst:5001" : "/api",
    withCredentials: true,
})