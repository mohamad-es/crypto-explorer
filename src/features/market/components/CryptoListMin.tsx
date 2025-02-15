import {TAllCryptoResponse} from "@/features/market/types/allCryptos.ts";
import {ArrowDown02Icon, ArrowDownRight01Icon, ArrowUp01Icon, ArrowUp02Icon, ArrowUpRight01Icon} from "hugeicons-react";
import {numberSeparator} from "@/utils/numberSeparator.ts";

type CryptoListMinProps = {
    title: string;
    data: TAllCryptoResponse[] | undefined
}

const CryptoListMin = ({data, title}: CryptoListMinProps) => {
    return (
        <div className={'border border-wireframe-grey space-y-4 rounded-xl p-3 bg-white font-sans'}>
            <h2 className={'label-semibold-2'}>{title}</h2>
            {data?.map((crypto) => (
                <div className={'grid grid-cols-3 gap-8 justify-between'}>
                    <div className={'uppercase label-semibold-1 flex items-center gap-2'}>
                        <img src={crypto.image} width={20} height={20} alt={crypto.name}/>
                        {crypto.symbol}
                    </div>
                    <div>${numberSeparator(Number(crypto.current_price).toFixed())}</div>
                    <div>
                        {crypto.price_change_percentage_24h.toString().charAt(0) === '-' ?
                            <span className={'flex items-center gap-2 text-red-500 dark:text-red-400'}>
                    <ArrowDown02Icon size={16}/>
                                {Number(crypto.price_change_percentage_24h).toFixed(2)}%</span> :
                            <span className={'flex items-center gap-2 text-green-600 dark:text-green-400'}>
                         <ArrowUp02Icon size={16}/>
                        +{Number(crypto.price_change_percentage_24h).toFixed(2)}%
                    </span>}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default CryptoListMin;