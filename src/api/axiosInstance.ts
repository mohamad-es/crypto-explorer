import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://data-api.cryptocompare.com",
})