import http from "./httpService";

export function getTag() {
  return http.get("/DataSource/GetTags").then(({ data }) => data);
}
