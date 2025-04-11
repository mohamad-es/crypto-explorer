import CryptoRowCardItems from "@/components/Cards/CryptoRowCard/CryptoRowCardItems";
import CryptoRowCardSkeleton from "@/components/Skeleton/CryptoRowCardSkeleton";
import { useCryptoMetaData } from "@/features/landing/hooks/useCryptoMetaData";
import RenderState from "@/utils/RenderState";
import { useEffect, useState } from "react";

const FavoriteCryptosList = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const favorite_crypto = localStorage.getItem("favorite_crypto");

  const { error, isPending, data } = useCryptoMetaData({
    params: {
      assets: favorite_crypto as string,
      quote_asset: "USD",
      asset_lookup_priority: "SYMBOL",
      groups: "ID,BASIC,PRICE,CHANGE,MKT_CAP,VOLUME",
    },
  });

  useEffect(() => {
    if (data) {
      Object?.entries(data?.Data)?.map((item) => setCryptoList(item));
    }
  }, [data]);

  return (
    <RenderState
      isPending={isPending}
      error={error}
      data={data}
      
      loadingRender={<CryptoRowCardSkeleton count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />}
    >
      {cryptoList.map((item) => (
        <CryptoRowCardItems data={item} />
      ))}
    </RenderState>
  );
};

export default FavoriteCryptosList;
