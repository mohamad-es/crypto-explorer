import {Link} from "react-router";
import {TAllCryptoResponse} from "@/features/market/types/allCryptos.ts";
import {StarIcon} from "hugeicons-react";
import CryptoChart from "@/components/Charts/CryptoChart.tsx";

type CryptoRowCardProps = {
    data: TAllCryptoResponse;
    index: number;
}

const CryptoRowCardItems = ({data, index}: CryptoRowCardProps) => {
    return (
        <div key={data.id}
             className={'grid grid-cols-12 items-center py-2 px-8 last-of-type:border-none border-b border-light-grey'}>
            <div className={'font-sans grid grid-cols-2 items-center pe-4'}>
                {index + 1}
                <div className={'cursor-pointer'}><StarIcon size={20}/></div>
            </div>
            <div className={'flex items-center gap-5 col-span-4'}>
                <img width={40} height={40} src={data.image} alt={data.name}/>
                <div className={'flex gap-5 subtitle-regular-1'}>
                    {data.name}
                    <span className={'text-grey-subtitle'}>|</span>
                    <span className={'uppercase'}>{data.symbol}</span>
                </div>
            </div>
            <div className={'col-span-2 font-sans'}>$ {data.current_price}</div>
            <div className={'col-span-2 font-sans'}>{data.price_change_percentage_24h}%</div>
            <div className={'col-span-2'}>
                <CryptoChart data={data} />
            </div>
            <div className={'col-span-1'}>
                <Link className={'btn-success justify-center'} to={`${data.id}`}>Explore</Link>
            </div>
        </div>
    );
};

export default CryptoRowCardItems;