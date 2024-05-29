import { QueryFunctionContext } from "react-query";
import http from "./httpService";

export interface getEmailProps {
  Email: string;
  TypeId: number;
}

export function getEmail({ Email, TypeId }: getEmailProps) {
  return http
    .post("/Account/FirstRequest", { Email, TypeId })
    .then(({ data }) => data);
}

export function checkEmail({
  queryKey,
}: QueryFunctionContext<[string, getEmailProps]>) {
  const [, { Email, TypeId }] = queryKey;
  return http
    .post("/Account/CheckEmail", { Email, TypeId })
    .then(({ data }) => data);
}

type confirmEmailProps = {
  Guid: string;
  SecurityCode: string;
};

export function confirmEmail({ Guid, SecurityCode }: confirmEmailProps) {
  return http
    .post("/Account/ConfirmRequest", { Guid, SecurityCode })
    .then((res) => res);
}

interface compeleteProfileProps {
  Guid: string;
  Email: string;
  Password: string;
  Name: string;
  GenderId: number;
  BirthDate: string;
  SecurityCode: string;
  Tags: string[];
}

export function compeleteProfile({
  Guid,
  Email,
  Password,
  Name,
  GenderId,
  BirthDate,
  SecurityCode,
  Tags,
}: compeleteProfileProps) {
  return http
    .post("/Account/Register", {
      Guid,
      Email,
      Password,
      Name,
      GenderId,
      BirthDate,
      SecurityCode,
      Tags,
    })
    .then((res) => res);
}

type loginProps = {
  UserName: string;
  Password: string;
};

export function login({ UserName, Password }: loginProps) {
  return http
    .post("/Account/Login", { UserName, Password })
    .then(({ data }) => data);
}

interface setPasswordProps {
  Guid: string;
  Password: string;
  SecurityCode: string;
  ConfirmPassword: string;
}

export function setPassword({
  Guid,
  Password,
  SecurityCode,
  ConfirmPassword,
}: setPasswordProps) {
  return http
    .post("/Account/Register", {
      Guid,
      Password,
      SecurityCode,
      ConfirmPassword,
    })
    .then((res) => res);
}
