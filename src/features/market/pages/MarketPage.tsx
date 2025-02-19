import {useTopList} from "@/features/landing/hooks/useTopList.ts";
import {TCryptoResponse, TTopListParams, TTopListResponse, TTopListSearchParams} from "@/types/response.ts";
import RenderState from "@/utils/RenderState.tsx";
import {useRef, useState} from "react";
import CryptoRowCard from "@/components/Cards/CryptoRowCard";
import Search from "@/components/Search.tsx";


const MarketPage = () => {
    const ref = useRef<{ list: TCryptoResponse[] | undefined } | null>(null);

    const [searchParams, setSearchParams] = useState<TTopListSearchParams>({
        search_string: '',
        limit: 5
    })

    const [params, setParams] = useState<TTopListParams>({
        page: 1,
        page_size: 10,
        groups: 'BASIC,PRICE,CHANGE,MKT_CAP,VOLUME',
    })

    const {data, error, isPending} = useTopList(params)

    return (
        <div className={'px-7 mt-10'}>
            <Search ref={ref} setParams={setSearchParams} params={searchParams}/>
            <RenderState isPending={isPending} error={error} data={data}>
                <CryptoRowCard cryptoData={data?.Data.LIST}/>
            </RenderState>
        </div>
    );
};

export default MarketPage;