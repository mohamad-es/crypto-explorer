import { TCryptoResponse } from "@/types/response";
import { formatLargeNumber } from "@/utils/formatLargeNumbers";

type SingleCryptoHeroProps = {
  data: TCryptoResponse;
  price: number;
};

const SingleCryptoHero = ({ data, price }: SingleCryptoHeroProps) => {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-2">
        <div className="flex items-center gap-5">
          <img width={75} height={75} src={data.LOGO_URL} alt={data.NAME} />
          <h1 className="heading-3">{data.NAME}</h1>
          <h2 className="bg-light-subtitle text-light-grey font-bold text-sm px-5 py-1 rounded-lg">{data.SYMBOL}</h2>
        </div>
        <div className="flex justify-between">
          <div className="text-3xl text-main font-sans font-semibold">{formatLargeNumber(price)}</div>
          <p className="text-light-subtitle text-sm">{data.NAME} price (USD) </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCryptoHero;
