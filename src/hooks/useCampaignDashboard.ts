import { campaignDashboard } from "@/services/campaignService";
import { useQuery } from "react-query";

function useCampaignDashboard() {
  return useQuery({
    queryKey: ["campaignDashboard"],
    queryFn: campaignDashboard,
  });
}

export default useCampaignDashboard;
