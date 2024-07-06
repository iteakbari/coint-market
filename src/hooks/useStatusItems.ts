import { getStatusItems } from "@/services/baseService";
import { useQuery } from "react-query";

function useStatusItems() {
  return useQuery({
    queryKey: ["getStatusItems"],
    queryFn: getStatusItems,
  });
}

export default useStatusItems;
