import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

console.log(process.env.NEXT_PUBLIC_API_BASE_URL);

app.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token.split("=")[1]}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

app.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized, redirecting to login...");
          break;
        case 403:
          console.error(
            "Forbidden, you do not have access to this resource..."
          );
          break;
        default:
          console.error(
            `Error: ${error.response.status} - ${error.response.statusText}`
          );
      }
    } else {
      console.error("Network or Server error");
    }
    return Promise.reject(error);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
