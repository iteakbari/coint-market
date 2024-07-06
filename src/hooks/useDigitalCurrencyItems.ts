import { getDigitalCurrencyItems } from "@/services/baseService";
import { useQuery } from "react-query";

function useDigitalCurrencyItems() {
  return useQuery({
    queryKey: ["getDigitalCurrencyItems"],
    queryFn: getDigitalCurrencyItems,
  });
}

export default useDigitalCurrencyItems;
