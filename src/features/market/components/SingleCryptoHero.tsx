import { TCryptoResponse } from "@/types/response";

type SingleCryptoHeroProps = {
  data: TCryptoResponse;
};

const SingleCryptoHero = ({data}: SingleCryptoHeroProps) => {
  return <div>{data.SYMBOL}</div>;
};

export default SingleCryptoHero;
