import http from "./httpService";

export function getAgeGroup() {
  return http.get("/DataSource/GetAgeGroups").then(({ data }) => data);
}
