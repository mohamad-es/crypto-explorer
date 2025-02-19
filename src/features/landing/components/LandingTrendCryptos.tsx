import {useCryptoMetaData} from "@/features/landing/hooks/useCryptoMetaData.ts";
import RenderState from "@/utils/RenderState.tsx";
import CryptoColumnCard from "@/components/Cards/CryptoColumnCard";
import {landingData} from "@/features/landing/landingData.tsx";

const LandingTrendCryptos = () => {

    const {error, isPending, data} = useCryptoMetaData({
        params: {
            assets: 'BTC,ETH,XRP,USDT',
            quote_asset: 'USD',
            asset_lookup_priority: 'SYMBOL',
            groups: 'BASIC,PRICE,CHANGE'
        }
    })

    return (
        <RenderState isPending={isPending} error={error} data={data}>
            <div className={'container mx-auto mt-28'}>
                <h2 className={'heading-4 mb-6 text-green-title dark:text-light-title'}>{landingData.trend.title}</h2>
                <div className={'grid grid-cols-4 gap-7 '}>
                    {data && Object.entries(data.Data).map(([key, value]) => (
                        <CryptoColumnCard key={key} cryptoName={key} data={value}/>
                    ))}
                </div>
            </div>
        </RenderState>
    )
};

export default LandingTrendCryptos;