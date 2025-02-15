import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {CRYPTO_QUERY_KEY} from "@/api/queryKeys.ts";
import {TSingleCryptoResponse} from "@/features/market/types/singleCrypto.ts";
import {SINGLE_CRYPTO_URL} from "@/api/endpoints.ts";

type singleCryptoOption = {
    cryptoName: string;
    params: unknown
}

export const useSingleCrypto = ({params, cryptoName}: singleCryptoOption) => {
    return useCustomQuery<TSingleCryptoResponse>({
        queryKey: [CRYPTO_QUERY_KEY, cryptoName],
        url: `${SINGLE_CRYPTO_URL}/${cryptoName}`,
        params
    })
}