import {LineChart, Line, AreaChart, YAxis, XAxis, CartesianGrid, Tooltip, Area} from "recharts";
import {TSingleCryptoResponse} from "@/features/market/types/singleCrypto.ts";

type CryptChartProps = {
    data: TSingleCryptoResponse;
};

const CryptoChart = ({data}: CryptChartProps) => {

    const chartData = [
        {
            name: data.name,
            uv: data.market_data.price_change_percentage_200d,
            pv: data.market_data.price_change_percentage_200d,
            amt: data.market_data.price_change_percentage_200d
        },
        {
            name: data.name,
            uv: data.market_data.price_change_percentage_60d,
            pv: data.market_data.price_change_percentage_60d,
            amt: data.market_data.price_change_percentage_60d
        },
        {
            name: data.name,
            uv: data.market_data.price_change_percentage_30d,
            pv: data.market_data.price_change_percentage_30d,
            amt: data.market_data.price_change_percentage_30d
        },
        {
            name: data.name,
            uv: data.market_data.price_change_percentage_24h,
            pv: data.market_data.price_change_percentage_24h,
            amt: data.market_data.price_change_percentage_24h
        },
    ]

    return (
        <AreaChart width={430} height={250} data={chartData}
                   margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            {/*<XAxis dataKey="name" />*/}
            {/*<YAxis />*/}
            {/*<CartesianGrid strokeDasharray="3 3" />*/}
            {/*<Tooltip />*/}
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
            {/*<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />*/}
        </AreaChart>
    );
};

export default CryptoChart;
