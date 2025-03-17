import { TCryptoResponse } from "@/types/response";
import { formatLargeNumber } from "@/utils/formatLargeNumbers";

type SingleCryptoHeroProps = {
  data: TCryptoResponse;
};

const SingleCryptoHero = ({ data }: SingleCryptoHeroProps) => {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="heading-3">Market Stats</h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center gap-5 mt-8">
          <img width={75} height={75} src={data.LOGO_URL} alt={data.NAME} />
          <p>{data.NAME}</p>
          <h4>{data.SYMBOL}</h4>
        </div>
        <div className="flex justify-between">
          <div className="text-3xl text-main font-sans font-semibold">{formatLargeNumber(data.PRICE_USD)}</div>
          <p className="text-light-subtitle text-sm">{data.NAME} price (USD) </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCryptoHero;
