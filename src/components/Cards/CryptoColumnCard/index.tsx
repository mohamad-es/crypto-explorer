import {ArrowUpRight01Icon} from "hugeicons-react";
import {useSingleCrypto} from "@/hooks/queries/useSingleCrypto.ts";
import RenderState from "@/utils/RenderState.tsx";
import {numberSeparator} from "@/utils/numberSeparator.ts";

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
        <RenderState isPending={isPending} error={error} data={data}>
            {data &&
                <div
                    className={'rounded-2xl py-4 flex flex-col border border-light-grey bg-white dark:text-light-title dark:bg-main/20 dark:border-light-grey/5 cursor-pointer transition-all hover:shadow-xl'}>
                    <div
                        className={'flex mx-5 items-center border-b border-b-light-grey dark:border-b-light-grey/5 pb-4 gap-3'}>
                        <img src={data.image.large} width={30} height={30} alt={data.name}/>
                            <div className={'label-semibold-1 capitalized-text'}>{data.symbol}</div>
                            <div
                                className={'bg-light-grey dark:bg-wireframe-grey dark:text-main label-semibold-2 px-2 py-1 rounded-md'}>{data.name}</div>
                            <div className={'ms-auto bg-grey-subtitle/20 rounded-full p-1'}><ArrowUpRight01Icon
                                color={'grey'}/></div>
                    </div>
                    <div className={'flex gap-10 ps-5 justify-evenly font-sans mt-4'}>
                        <div>
                            <h4 className={'heading-6'}>${numberSeparator(data.market_data.current_price.usd)}</h4>
                            <p className={'subtitle-medium-1 text-grey-subtitle mt-1'}>{Number(data.market_data.price_change_percentage_24h).toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
            }
        </RenderState>
    );
};

export default CryptoColumnCard;