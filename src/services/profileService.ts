import http from "./httpService";

export function getProfile() {
  return http.get("/Profile/GetProfile").then(({ data }) => data);
}
