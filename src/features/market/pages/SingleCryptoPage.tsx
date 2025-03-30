import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RenderState from "@/utils/RenderState";
import { useFetchSingleCrypto } from "../hooks/useFetchSingleCrypto";
import SingleCryptoHero from "../components/SingleCryptoHero";
import CryptoPriceChart from "../components/CryptoPriceChart";

const SingleCryptoPage = () => {
  const params = useParams();
  const [price, setPrice] = useState<number | null>(null);
  const [priceData, setPriceData] = useState<{ timestamp: number; value: number }[]>([]);

  const { data, error, isPending } = useFetchSingleCrypto(params.crypto_id!);

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL);

    socket.onopen = () => {
      console.log("WebSocket connection established");

      const message = {
        action: "SUBSCRIBE",
        type: "index_cc_v1_latest_tick",
        groups: ["VALUE", "CURRENT_HOUR", "ID", "CURRENT_DAY", "CURRENT_WEEK", "CURRENT_MONTH", "CURRENT_YEAR"],
        market: "cadli",
        instruments: [`${params.crypto_id}-USD`],
      };

      socket.send(JSON.stringify(message));
      console.log("Message sent:", message);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message received:", data);
      if (data && data.VALUE) {
        setPrice(data.VALUE);
        setPriceData((prevData) => [...prevData, { timestamp: data.VALUE_LAST_UPDATE_TS, value: data.VALUE }]);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <RenderState data={data} isPending={isPending} error={error}>
      {price && <SingleCryptoHero price={price} data={data?.Data[params.crypto_id]} />}
      <CryptoPriceChart />
    </RenderState>
  );
};

export default SingleCryptoPage;
