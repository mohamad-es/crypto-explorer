import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {TMetaDataResponse, TResponse} from "@/types/response.ts";
import {METADATA_URL} from "@/api/endpoints.ts";

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
        url: METADATA_URL,
        queryKey: [params.assets],
        params,
    })
}