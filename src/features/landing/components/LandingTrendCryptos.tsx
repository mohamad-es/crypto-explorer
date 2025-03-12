import { useCryptoMetaData } from "@/features/landing/hooks/useCryptoMetaData.ts";
import RenderState from "@/utils/RenderState.tsx";
import CryptoColumnCard from "@/components/Cards/CryptoColumnCard";
import { landingData } from "@/features/landing/landingData.tsx";
import CryptoColCardSkeleton from "@/components/Skeleton/CryptoColCardSkeleton";

const LandingTrendCryptos = () => {
  const { error, isPending, data } = useCryptoMetaData({
    params: {
      assets: "BTC,ETH,XRP,USDT",
      quote_asset: "USD",
      asset_lookup_priority: "SYMBOL",
      groups: "ID,BASIC,PRICE,CHANGE",
    },
  });

  return (
    <div className={"container mx-auto mt-28"}>
      <h2 className={"heading-4 mb-6 text-green-title dark:text-light-title"}>{landingData.trend.title}</h2>
      <RenderState
        isPending={isPending}
        error={error}
        data={data}
        loadingRender={<CryptoColCardSkeleton count={[1, 2, 3, 4]} />}
      >
        <div className={"grid grid-cols-4 gap-7"}>
          {data &&
            Object.entries(data.Data).map(([key, value]) => (
              <CryptoColumnCard link={key} key={key} cryptoName={key} data={value} />
            ))}
        </div>
      </RenderState>
    </div>
  );
};

export default LandingTrendCryptos;
