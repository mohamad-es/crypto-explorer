import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {TMetaDataResponse, TResponse} from "@/types/response.ts";

type useCryptoMetaData =
    {
        params: {
            assets: string;
            groups?: string;
            asset_lookup_priority?: string;
            quote_asset?: string
        }
    }

export const useCryptoMetaData = ({params}: useCryptoMetaData) => {
    return useCustomQuery<TResponse<TMetaDataResponse>>({
        url: import.meta.env.VITE_METADATA_URL,
        queryKey: [params.assets],
        params,
    })
}