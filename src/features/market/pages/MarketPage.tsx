import CryptoRowCard from "@/components/Cards/CryptoRowCard";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import CryptoRowCardSkeleton from "@/components/Skeleton/CryptoRowCardSkeleton";
import { useTopList } from "@/features/landing/hooks/useTopList";
import { TTopListParams, TTopListSearchParams } from "@/types/response";
import RenderState from "@/utils/RenderState";
import { useState } from "react";

const MarketPage = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [params, setParams] = useState<TTopListParams>({
    page: 1,
    page_size: 10,
    groups: "ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK",
    sort_by: "CIRCULATING_MKT_CAP_USD",
    sort_direction: "DESC",
  });

  const [searchParams, setSearchParams] = useState<TTopListSearchParams>({
    limit: 5,
    search_string: "",
  });

  const { data, error, isPending } = useTopList(params);

  return (
    <div className={"container mx-auto mt-32"}>
      <RenderState
        isPending={isPending}
        error={error}
        data={data}
        loadingRender={<CryptoRowCardSkeleton count={skeleton} />}
      >
        <Search params={searchParams} setParams={setSearchParams} />
        <CryptoRowCard cryptoData={data?.Data.LIST} />
      </RenderState>
      <Pagination setParams={setParams} params={params} />
    </div>
  );
};

export default MarketPage;
