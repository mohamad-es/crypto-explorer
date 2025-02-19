import {useCustomQuery} from "@/hooks/react-query/useCustomQuery.ts";
import {TResponse, TTopListParams, TTopListResponse} from "@/types/response.ts";


export const useTopList = (params: TTopListParams) => {
    return useCustomQuery<TResponse<TTopListResponse>>({
        url: import.meta.env.VITE_TOP_LIST_URL,
        queryKey: [params],
        params,
    })
}