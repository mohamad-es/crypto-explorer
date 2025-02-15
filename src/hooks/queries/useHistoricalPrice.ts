import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {CRYPTO_HISTORICAL_PRICE_QUERY_KEY} from "@/api/queryKeys.ts";
import {SINGLE_CRYPTO_URL} from "@/api/endpoints.ts";
import {THistoricalPriceResponse} from "@/types/response.ts";

type useHistoricalPriceOptions = {
    cryptoName: string;
    params: {
        vs_currency: string;
        days: string;
        interval?: string;
        precision?: string;
    }
}

export const useHistoricalPrice = ({params, cryptoName}: useHistoricalPriceOptions) => {
    return useCustomQuery<THistoricalPriceResponse>({
        queryKey: [CRYPTO_HISTORICAL_PRICE_QUERY_KEY, cryptoName],
        url: `${SINGLE_CRYPTO_URL}/${cryptoName}/market_chart`,
        params
    })
}
