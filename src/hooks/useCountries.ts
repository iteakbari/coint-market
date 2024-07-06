import { getCountries } from "@/services/baseService";
import { useQuery } from "react-query";

function useCountries() {
  return useQuery({
    queryKey: ["getCountries"],
    queryFn: getCountries,
  });
}

export default useCountries;
