import {useSingleCrypto} from "@/features/market/hooks/queries/useSingleCrypto.ts";
import {useParams} from "react-router";
import CryptoChart from "@/components/Charts/CryptoChart.tsx";

const SingleCryptoPage = () => {
    const params = useParams()
    const {data, isPending, error} = useSingleCrypto({crypto_name:params.crypto_name})

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(data)

    return (
        <div>
            SingleCryptoPage
            <CryptoChart data={data}/>
        </div>
    );
};

export default SingleCryptoPage;