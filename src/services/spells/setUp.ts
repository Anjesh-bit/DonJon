import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../axios/fetcher";
import { spellsKey } from "../../queryKeys/spellsKey";

export const useGetProfileInfo = () => {
  return useQuery({
    queryKey: [spellsKey.spellsAllFetchDataKey],
    queryFn: () => fetcher(`spells`),
  });
};

export const useGetProfileInfoByIndex = (url: string) => {
  const modifiedUrl = url?.replace("/api", "");
  return useQuery({
    queryKey: [spellsKey.spellsById, modifiedUrl],
    queryFn: () => fetcher(modifiedUrl),
    enabled: !!modifiedUrl,
  });
};
