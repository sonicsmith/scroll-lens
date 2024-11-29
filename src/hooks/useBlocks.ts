import { useQuery } from "@tanstack/react-query";
import { getBlockData } from "../utils/getBlockData";

export const useBlocks = () => {
  const query = useQuery({
    queryKey: ["block-data"],
    queryFn: getBlockData,
    refetchInterval: 3000,
  });
  return { blockNumber: query.data?.result ?? null };
};
