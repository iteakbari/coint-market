import { getCampaign } from "@/services/campaignService";
import { useQuery } from "react-query";

function useCampaign(campaign: string) {
  return useQuery({
    queryKey: ["getCampaign", { campaign }],
    queryFn: getCampaign,
  });
}

export default useCampaign;
