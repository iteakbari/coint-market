import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

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
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originConfig = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (error.response?.status === 401 && !originConfig?._retry) {
      originConfig._retry = true;
      try {
        const { data } = await app.get("/Account/RefreshToken", {
          withCredentials: true,
        });
        if (data) return app(originConfig);
      } catch (error) {}
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
