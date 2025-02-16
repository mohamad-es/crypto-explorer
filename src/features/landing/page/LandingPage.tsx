import LandingHero from "@/features/landing/components/LandingHero.tsx";
import LandingTrendCryptos from "@/features/landing/components/LandingTrendCryptos.tsx";
import {Fragment} from "react";
import {useCryptoMetaData} from "@/features/landing/hooks/useCryptoMetaData.ts";

const LandingPage = () => {
    const {error, isPending, data} = useCryptoMetaData({
        params: {
            assets: 'BTC,ETH,XRP,USDT',
            quote_asset: 'USD',
            asset_lookup_priority: 'SYMBOL'
        }
    })

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error!</div>


    console.log(data)
    return (
        <Fragment>
            <LandingHero/>
            <LandingTrendCryptos/>
        </Fragment>
    );
};

export default LandingPage;