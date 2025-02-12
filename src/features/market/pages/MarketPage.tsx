import {marketData} from "@/features/market/datas/marketData.ts";
import CryptoGridLayout from "@/components/CryptoGridLayout.tsx";
import {useAllCrypto} from "@/hooks/queries/useAllCrypto.ts";


const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: false
}

const MarketPage = () => {
    const {data, isPending, error} = useAllCrypto({params})


    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if(data?.length === 0) return <div>no item found</div>


    console.log(data)

    return (
        <div className={'px-7 mt-10'}>
            <h1 className={'heading-3 text-green-title dark:text-light-title mb-4'}>{marketData.title}</h1>
            <CryptoGridLayout headerItems={[{title: 'No', colSpan: 1}]} cryptoRows={data}/>
        </div>
    );
};

export default MarketPage;