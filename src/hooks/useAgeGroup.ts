import { getAgeGroup } from "@/services/adService";
import { useQuery } from "react-query";

function useAgeGroup() {
  return useQuery({
    queryKey: ["getAgeGroup"],
    queryFn: getAgeGroup,
  });
}

export default useAgeGroup;
