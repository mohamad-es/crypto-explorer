import { useParams } from "react-router";
import RenderState from "@/utils/RenderState";
import { useFetchSingleCrypto } from "../hooks/useFetchSingleCrypto";
import SingleCryptoHero from "../components/SingleCryptoHero";

const SingleCryptoPage = () => {
  const params = useParams();

  const { data, error, isPending } = useFetchSingleCrypto(params.crypto_id!);

  return (
    <RenderState data={data} isPending={isPending} error={error}>
      <SingleCryptoHero data={data?.Data[params.crypto_id]} />
    </RenderState>
  );
};

export default SingleCryptoPage;
