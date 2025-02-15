import CryptoColumnCard from "@/components/Cards/CryptoColumnCard";

const list = [
    {
        name: 'bitcoin',
        historicalParams: {
            vs_currency: 'usd',
            days: '7',
            interval:'daily'
        }
    },
    {
        name: 'tether',
        historicalParams: {
            vs_currency: 'usd',
            days: '7',
            interval:'daily'
        }
    }
]

const LandingTrendCryptos = () => {
    return list.map((item) =>
        <CryptoColumnCard historicalPriceParams={item.historicalParams} cryptoName={item.name}/>
    )
};

export default LandingTrendCryptos;