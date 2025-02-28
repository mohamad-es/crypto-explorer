import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/axiosInstance.ts";
import { TCustomQueries } from "@/types/queris.ts";

export const useCustomQuery = <T>({ queryKey, url, params, enable }: TCustomQueries) => {
  const query = useQuery<T>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(url, {
          params,
        });

        return response.data;
      } catch (error) {
        return error as AxiosError<T>;
      }
    },
    enabled: enable,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 10 * (60 * 1000),
  });

  return {
    isPending: query.isPending,
    data: query.data,
    error: query.error,
  };
};
