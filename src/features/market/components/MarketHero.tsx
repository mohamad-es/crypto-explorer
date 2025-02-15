import CryptoListMin from "@/features/market/components/CryptoListMin.tsx";
import {useAllCrypto} from "@/hooks/queries/useAllCrypto.ts";


const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 3,
    page: 1,
    sparkline: false,
    days: 7,
    interval: 'daily'
}

const MarketHero = () => {
    const {data, isPending, error} = useAllCrypto({params})

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (data?.length === 0) return <div>no item found</div>

    return (
        <div>
            <div className={'flex justify-center gap-5'}>
                <CryptoListMin title={'Hot Coins'} data={data}/>
                <CryptoListMin title={'Hot Coins'} data={data}/>
                <CryptoListMin title={'Hot Coins'} data={data}/>
                <CryptoListMin title={'Hot Coins'} data={data}/>
            </div>
        </div>
    );
};

export default MarketHero;