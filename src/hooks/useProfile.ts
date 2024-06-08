import { getProfile } from "@/services/profileService";
import { useQuery } from "react-query";

function useProfile() {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
  });
}

export default useProfile;
