import { getGender } from "@/services/baseService";
import { useQuery } from "react-query";

function useGender() {
  return useQuery({
    queryKey: ["getGender"],
    queryFn: getGender,
  });
}

export default useGender;
