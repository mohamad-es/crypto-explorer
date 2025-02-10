import axios from "axios";

export const axiosInstance =  axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
})