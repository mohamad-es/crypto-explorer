import { CRYPTO_QUERY_KEY } from "@/api/queryKeys";
import { useCustomQuery } from "@/hooks/react-query/useCustomQuery";
import { THistoricalPriceParams, THistoricalPriceResponse, TResponse } from "@/types/response";

export const useHistoricalPrice = (crypto_id: string) => {
  const params: THistoricalPriceParams = {
    asset: crypto_id,
    groups: "ID,GENERAL,ACTIVITY",
    asset_lookup_priority: "SYMBOL",
    limit: 90,
    fill: true,
    response_format: "JSON",
  };

  return useCustomQuery<TResponse<THistoricalPriceResponse[]>>({
    queryKey: [CRYPTO_QUERY_KEY, crypto_id],
    url: import.meta.env.VITE_HISTORICAL_SOCIAL,
    params,
  });
};
