import { campaignView } from "@/services/campaignService";
import { useQuery } from "react-query";

function useCampaignView(campaign: string) {
  return useQuery({
    queryKey: ["campaignView", { campaign }],
    queryFn: campaignView,
  });
}

export default useCampaignView;
