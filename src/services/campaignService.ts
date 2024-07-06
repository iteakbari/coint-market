import { CampaignData, CampaignsProps } from "@/types/type";
import http from "./httpService";
import { QueryFunctionContext, QueryKey } from "react-query";

export function addCampaign({
  Name,
  Content,
  LogoName,
  DigitalCurrencyId,
  Budget,
  Logo,
  StatusId,
}: CampaignData) {
  console.log(StatusId);

  const formData = new FormData();
  formData.append("Name", Name);
  formData.append("Content", Content);

  if (LogoName) {
    formData.append("LogoName", LogoName);
  }

  if (DigitalCurrencyId) {
    formData.append("DigitalCurrencyId", DigitalCurrencyId.toString());
  }

  if (Budget) {
    formData.append("Budget", Budget.toString());
  }

  if (StatusId) {
    formData.append("StatusId", StatusId.toString());
  }

  if (Logo) {
    formData.append("Logo", Logo);
  }

  return http
    .post(`/Campaign/Campaign`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }) => data);
}

export function getCampaigns({
  PageIndex,
  PageSize,
  Conditions: [{ Name, Value, Comparison }],
  OrderBy: { OrderName, Ascending },
}: CampaignsProps) {
  return http
    .post("/Campaign/GetCampaigns", {
      PageIndex,
      PageSize,
      Conditions: [
        {
          Name,
          Value,
          Comparison,
        },
      ],
      OrderBy: {
        Name: OrderName,
        Ascending,
      },
    })
    .then(({ data }) => {
      return data;
    });
}

export function campaignDashboard() {
  return http.get("/Campaign/GetCampaignDashboard").then(({ data }) => data);
}

type QueryKeyType = [string, { campaign: string }];

export function getCampaign({ queryKey }: QueryFunctionContext<QueryKeyType>) {
  const { campaign } = queryKey[1];
  return http
    .get(`/Campaign/GetCampaign?id=${campaign}`)
    .then(({ data }) => data);
}

export function campaignView({ queryKey }: QueryFunctionContext<QueryKeyType>) {
  const { campaign } = queryKey[1];
  return http
    .get(`/Campaign/CampaignView?id=${campaign}`)
    .then(({ data }) => data);
}
