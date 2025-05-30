import { CRYPTO_QUERY_KEY } from "@/api/queryKeys";
import { useCustomQuery } from "@/hooks/react-query/useCustomQuery";
import { TMetaDataParams, TMetaDataResponse, TResponse } from "@/types/response";

export const useFetchSingleCrypto = (crypot_id: string) => {
  const params: TMetaDataParams = {
    assets: crypot_id,
    groups: "ID,BASIC,PRICE",

  };

  return useCustomQuery<TResponse<TMetaDataResponse>>({
    queryKey: [CRYPTO_QUERY_KEY, crypot_id],
    url: import.meta.env.VITE_METADATA_URL,
    params,
  });
};
