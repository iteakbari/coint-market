import http from "./httpService";

export function getAgeGroup() {
  return http.get("/DataSource/GetAgeGroups").then(({ data }) => data);
}

export function setAdSet({}) {
  return http.post("/Campaign/AdSetSave", {}).then(({ data }) => data);
}
