import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {SINGLE_CRYPTO_URL} from "@/api/endpoints.ts";
import {TSingleCryptoResponse, TUseSingleCryptoOptions} from "@/features/Crypto/types/singleCrypto.ts";


export const useSingleCrypto = ({crypto_name, params}: TUseSingleCryptoOptions) => {
    return useCustomQuery<TSingleCryptoResponse>({
        queryKey: [crypto_name],
        url: `${SINGLE_CRYPTO_URL}/${crypto_name}`,
        params
    })
}
