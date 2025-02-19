import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {TResponse, TTopListResponse, TTopListSearchParams} from "@/types/response.ts";

export const useSearch = (params: TTopListSearchParams) => {
    return useCustomQuery<TResponse<TTopListResponse>>({
        url: import.meta.env.VITE_TOP_LIST_SEARCH,
        queryKey: [params],
        params,
    })
}
