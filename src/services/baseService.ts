import http from "./httpService";

export function getTag() {
  return http.get("/DataSource/GetTags").then(({ data }) => data);
}

export function getStatusItems() {
  return http.get("/DataSource/GetStatusItems").then(({ data }) => data);
}

export function getDigitalCurrencyItems() {
  return http
    .get("/DataSource/GetDigitalCurrencyItems")
    .then(({ data }) => data);
}

export function getGender() {
  return http.get("/DataSource/GetGenders").then(({ data }) => data);
}

export function getCountries() {
  return http.get("/DataSource/GetCountries").then(({ data }) => data);
}
