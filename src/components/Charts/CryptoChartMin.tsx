import {useHistoricalPrice} from "@/hooks/queries/useHistoricalPrice.ts";
import {Area, AreaChart, ResponsiveContainer,} from "recharts";

type CryptChartProps = {
    params: {
        vs_currency: string;
        days: string;
        interval?: string;
        precision?: string;
    }
    cryptoName: string;
};

const CryptoChartMin = ({cryptoName, params}: CryptChartProps) => {

    const {data, isPending, error} = useHistoricalPrice({
        params,
        cryptoName
    })

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data to show</div>;


    const chartData = data.prices.map((price, index) => ({
        date: new Date(price[0]).toLocaleDateString("en-US"), // Convert timestamp to readable date
        price: price[1], // Price in USD
        marketCap: data.market_caps[index][1], // Market cap
        volume: data.total_volumes[index][1], // 24h Volume
    }));


    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <AreaChart data={chartData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                {/*<Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorPrice)" />*/}
                <Area type="monotone" dataKey="volume" stroke="#82ca9d" fillOpacity={1} fill="url(#colorVolume)"/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CryptoChartMin;
