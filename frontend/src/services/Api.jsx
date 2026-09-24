import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_URL || "https://student-gigs.onrender.com";
const normalizedBaseUrl = rawBaseUrl.replace(/\/+$/, "");
const baseURL = normalizedBaseUrl.endsWith("/api")
  ? normalizedBaseUrl
  : `${normalizedBaseUrl}/api`;

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;
