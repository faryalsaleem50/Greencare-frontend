import axios from "axios";

const API = axios.create({
  baseURL: "https://greencare-backend.vercel.app/api",
});

export default API;