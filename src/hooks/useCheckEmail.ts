import { checkEmail, getEmailProps } from "@/services/registerServeice";
import { useQuery } from "react-query";

function useCheckEmail({ Email, TypeId }: getEmailProps) {
  return useQuery({
    queryKey: ["checkEmail", { Email, TypeId }],
    queryFn: checkEmail,
  });
}

export default useCheckEmail;
