import {
  changePasswordProps,
  ProfileData,
  savePreferencesProps,
} from "@/types/type";
import http from "./httpService";

export function getProfile() {
  return http.get("/Profile/GetProfile").then(({ data }) => data);
}

export function editProfile({
  Name,
  BirthDate,
  GenderId,
  Email,
  Guid,
  Description,
  WebsiteUrl,
  PersonImageFile,
}: ProfileData) {
  const formData = new FormData();
  formData.append("Name", Name);
  formData.append("BirthDate", BirthDate);
  formData.append("GenderId", GenderId.toString());
  formData.append("Email", Email);
  formData.append("Guid", Guid);

  if (PersonImageFile) {
    formData.append("PersonImageFile", PersonImageFile);
  }

  if (WebsiteUrl) {
    formData.append("WebsiteUrl", WebsiteUrl);
  }

  if (Description) {
    formData.append("Description", Description);
  }

  return http
    .post(`/Profile/EditProfile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }) => data);
}

export function changePassword({
  OldPassword,
  NewPassword,
  ConfirmNewPassword,
}: changePasswordProps) {
  return http
    .post("/Profile/ChangePassword", {
      OldPassword,
      NewPassword,
      ConfirmNewPassword,
    })
    .then(({ data }) => data);
}

export function getPreferences() {
  return http.get("/Profile/GetPreferences").then(({ data }) => data);
}

export function savePreferences({
  Tags,
  IsReceiveEmail,
}: savePreferencesProps) {
  return http.post("/Profile/SavePreference", { Tags, IsReceiveEmail });
}
