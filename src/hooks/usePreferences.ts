import { getPreferences } from "@/services/profileService";
import { useQuery } from "react-query";

function usePrefrences() {
  return useQuery({
    queryKey: ["getPreferences"],
    queryFn: getPreferences,
  });
}

export default usePrefrences;
