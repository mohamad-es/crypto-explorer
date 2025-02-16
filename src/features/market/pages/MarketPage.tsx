import {marketData} from "@/features/market/datas/marketData.ts";
import MarketHero from "@/features/market/components/MarketHero.tsx";



const MarketPage = () => {


    return (
        <div className={'px-7 mt-10'}>
            <MarketHero />
            <h1 className={'heading-3 text-green-title dark:text-light-title mb-10'}>{marketData.title}</h1>
        </div>
    );
};

export default MarketPage;