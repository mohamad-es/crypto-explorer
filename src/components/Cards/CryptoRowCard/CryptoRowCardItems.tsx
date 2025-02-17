import {useNavigate} from "react-router";
import {numberSeparator} from "@/utils/numberSeparator.ts";
// import {ArrowDownRight01Icon, ArrowUpRight01Icon} from "hugeicons-react";
import {TCryptoResponse} from "@/types/response.ts";

type CryptoRowCardProps = {
    data: TCryptoResponse;
}

const CryptoRowCardItems = ({data}: CryptoRowCardProps) => {
    const navigate = useNavigate();
    return (
        <div
            key={data.ID}
            onClick={() => navigate(`${data.ID}`)}
            className={'grid grid-cols-12 caption-regular-1 text-black-title dark:text-light-subtitle font-sans items-center py-2 border-b dark:border-b-white/5 border-b-light-grey px-6 last-of-type:border-none border-light-grey transition-all hover:bg-gray-50 dark:hover:bg-main cursor-pointer'}>
            <div className={'flex items-center gap-3 col-span-4'}>
                <img width={44} height={44} src={data.LOGO_URL} alt={data.NAME}/>
                <div className={'flex items-center gap-2'}>
                    <span className={'uppercase'}>{data.PREVIOUS_ASSET_SYMBOLS}</span>
                    <span className={''}>{data.NAME}</span>
                </div>
            </div>
            <div className={'col-span-2'}>${numberSeparator(data.PRICE_USD)}</div>
            {/*<div*/}
            {/*    className={`col-span-2`}>*/}
            {/*    {data.price_change_percentage_24h.toString().charAt(0) === '-' ?*/}
            {/*        <span className={'flex items-center gap-2 text-red-500 dark:text-red-400'}>*/}
            {/*        <ArrowDownRight01Icon size={18}/>*/}
            {/*            {data.price_change_percentage_24h}%</span> :*/}
            {/*        <span className={'flex items-center gap-2 text-green-600 dark:text-green-400'}>*/}
            {/*             <ArrowUpRight01Icon size={18}/>*/}
            {/*            +{data.price_change_percentage_24h}%*/}
            {/*        </span>}*/}

            {/*</div>*/}
            {/*<div className={'col-span-2'}>{numberSeparator(data.total_volume)}</div>*/}
            {/*<div className={'col-span-2'}>{numberSeparator(data.market_cap)}</div>*/}
        </div>
    );
};

export default CryptoRowCardItems;