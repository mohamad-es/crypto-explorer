import RenderState from "@/utils/RenderState.tsx";
import {useSingleCrypto} from "@/hooks/queries/useSingleCrypto.ts";
import CryptoChartMin from "@/components/Charts/CryptoChartMin.tsx";

type CryptoColumnCardProps = {
    cryptoName: string;
    singleCryptoParams?: {
        vs_currency: string,
        id: string,
        order: string,
        interval: string
    }
    historicalPriceParams: {
        vs_currency: string;
        days: string;
        interval?: string;
        precision?: string;
    }
}

const CryptoColumnCard = ({singleCryptoParams, historicalPriceParams, cryptoName}: CryptoColumnCardProps) => {

    const {data, error, isPending} = useSingleCrypto({cryptoName, params: singleCryptoParams})

    return (
        <RenderState data={data} isPending={isPending} error={error}>
            {data &&
                <div className={'rounded-xl flex'}>
                    <div></div>
                    <div>{data.name}</div>
                    <div className={'flex'}>
                        <CryptoChartMin params={historicalPriceParams} cryptoName={cryptoName}/>
                    </div>
                </div>
            }
        </RenderState>
    );
};

export default CryptoColumnCard;