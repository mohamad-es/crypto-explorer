import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

interface HistoricalData {
  TIMESTAMP: number;
  CLOSE: number;
}

interface CryptoChartMaxProps {
  data: HistoricalData[];
}

const CryptoChartMax: React.FC<CryptoChartMaxProps> = ({ data }) => {
  // Format data for Recharts
  const formattedData = data.map((item) => ({
    name: new Date(item.TIMESTAMP * 1000).toLocaleDateString(), // Convert timestamp to readable date
    close: item.CLOSE, // Closing price
  }));

  return (
    <AreaChart width={730} height={250} data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#colorClose)" />
    </AreaChart>
  );
};

export default CryptoChartMax;
