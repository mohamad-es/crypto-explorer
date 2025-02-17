import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {TOP_LIST_URL} from "@/api/endpoints.ts";
import {TOP_LIST_QUERY_KEY} from "@/api/queryKeys.ts";
import {TResponse, TTopListResponse} from "@/types/response.ts";

export const useTopList = () => {
    return useCustomQuery<TResponse<TTopListResponse>>({
        url: TOP_LIST_URL,
        queryKey: [TOP_LIST_QUERY_KEY],
        params: {
            page: 1,
            page_size: 10,
        },
    })
}