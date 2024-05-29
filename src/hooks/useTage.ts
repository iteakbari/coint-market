import { getTag } from "@/services/baseService";
import { useQuery } from "react-query";

function useTage() {
  return useQuery({
    queryKey: ["getTag"],
    queryFn: getTag,
  });
}

export default useTage;
