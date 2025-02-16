import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {CRYPTO_METADATA_URL} from "@/api/endpoints.ts";

type useCryptoMetaData =
    {
        params: {
            assets: string;
            groups?: string[]
            asset_lookup_priority?: string;
            quote_asset?: string
        }
    }

export const useCryptoMetaData = ({params}: useCryptoMetaData) => {
    return useCustomQuery({
        url: CRYPTO_METADATA_URL,
        queryKey: [params.assets],
        params,
    })
}