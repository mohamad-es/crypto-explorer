import React, { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

type CryptoPriceChartProps = {
  data: { timestamp: number; value: number }[];
};

const CryptoPriceChart = ({ data }: CryptoPriceChartProps) => {
  const formattedData = data.map((item) => ({
    name: new Date(item.timestamp * 1000).toLocaleDateString(),
    value: item.value,
  }));

  return (
    <AreaChart width={730} height={250} data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
    </AreaChart>
  );
};

const CryptoPriceChartContainer = () => {
  const [data, setData] = useState<{ timestamp: number; value: number }[]>([]);

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL);

    socket.onmessage = (event) => {
      const rawData = event.data;
      const parsedData = parseData(rawData);
      setData((prevData) => [...prevData, ...parsedData]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const parseData = (data: string) => {
    const lines = data.trim().split("\n");
    const parsedData: { timestamp: number; value: number }[] = [];

    lines.forEach((line) => {
      const [key, value] = line.split(":");
      if (key === "VALUE_LAST_UPDATE_TS") {
        const timestamp = parseInt(value, 10);
        const valueLine = lines.find((line) => line.startsWith("VALUE:"));
        if (valueLine) {
          const [, value] = valueLine.split(":");
          parsedData.push({ timestamp, value: parseFloat(value) });
        }
      }
    });

    return parsedData;
  };

  return <CryptoPriceChart data={data} />;
};

export default CryptoPriceChartContainer;