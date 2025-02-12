import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {CRYPTO_QUERY_KEY} from "@/api/queryKeys.ts";
import {ALL_CRYPTOS_URL} from "@/api/endpoints.ts";
import {TAllCryptoResponse, TUseAllCryptoOptions} from "@/features/market/types/allCryptos.ts";

export const useAllCrypto = ({params}: TUseAllCryptoOptions) => {
    return useCustomQuery<TAllCryptoResponse[]>({
        queryKey: [CRYPTO_QUERY_KEY],
        url: ALL_CRYPTOS_URL,
        params
    })
}