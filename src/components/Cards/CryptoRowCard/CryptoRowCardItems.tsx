import {useNavigate} from "react-router";
import {TAllCryptoResponse} from "@/features/market/types/allCryptos.ts";
import {numberSeparator} from "@/utils/numberSeparator.ts";
import {ArrowDownRight01Icon, ArrowUpRight01Icon} from "hugeicons-react";

type CryptoRowCardProps = {
    data: TAllCryptoResponse;
}

const CryptoRowCardItems = ({data}: CryptoRowCardProps) => {
    const navigate = useNavigate();
    return (
        <div
            key={data.id}
            onClick={() => navigate(`${data.id}`)}
            className={'grid grid-cols-12 font-sans items-center py-4 px-6 last-of-type:border-none border-light-grey transition-all hover:bg-gray-50 dark:hover:bg-main cursor-pointer'}>
            <div className={'flex items-center gap-3 col-span-4'}>
                <img width={24} height={24} src={data.image} alt={data.name}/>
                <div className={'flex items-center gap-2'}>
                    <span className={'uppercase label-semibold-1'}>{data.symbol}</span>
                    <span className={'text-grey-subtitle caption-medium-2'}>{data.name}</span>
                </div>
            </div>
            <div className={'col-span-2'}>${numberSeparator(data.current_price)}</div>
            <div
                className={`col-span-2 `}>
                {data.price_change_percentage_24h.toString().charAt(0) === '-' ?
                    <span className={'flex items-center gap-2 text-red-500 dark:text-red-400'}>
                    <ArrowDownRight01Icon size={18}/>
                        {data.price_change_percentage_24h}%</span> :
                    <span className={'flex items-center gap-2 text-green-600 dark:text-green-400'}>
                         <ArrowUpRight01Icon size={18}/>
                        +{data.price_change_percentage_24h}%
                    </span>}

            </div>
            <div className={'col-span-2'}>{numberSeparator(data.total_volume)}</div>
            <div className={'col-span-2'}>{numberSeparator(data.market_cap)}</div>
        </div>
    );
};

export default CryptoRowCardItems;