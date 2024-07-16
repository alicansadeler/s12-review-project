import { useQuery } from "@tanstack/react-query";
import { getComments } from "./api";

export const useComments = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
    staleTime: 5000,
    /* refetchInterval: 5000 */
  });
};
