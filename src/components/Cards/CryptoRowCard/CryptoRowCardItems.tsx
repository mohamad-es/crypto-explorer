import { useNavigate } from "react-router";
import { TCryptoResponse } from "@/types/response.ts";
import { ArrowDown02Icon, ArrowUp02Icon } from "hugeicons-react";
import { formatLargeNumber } from "@/utils/formatLargeNumbers";

type CryptoRowCardProps = {
  data: TCryptoResponse;
};

const CryptoRowCardItems = ({ data }: CryptoRowCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      key={data.ID}
      onClick={() => navigate(`/market/${data.SYMBOL}`)}
      className={
        "grid grid-cols-8 pe-10 ps-6 caption-regular-1 text-black-title dark:text-light-subtitle font-sans items-center py-2 border-b dark:border-b-white/5 border-b-light-grey  last-of-type:border-none border-light-grey transition-all hover:bg-gray-50 dark:hover:bg-main cursor-pointer"
      }
    >
      <div className={"flex items-center gap-3 col-span-3"}>
        <img width={44} height={44} src={data.LOGO_URL} alt={data.NAME} />
        <div className={"flex items-center gap-3"}>
          <span>{data.NAME}</span>
          <span className="text-wireframe-grey dark:text-grey-subtitle">|</span>
          <span className="uppercase">{data.SYMBOL}</span>
        </div>
      </div>
      <div>{formatLargeNumber(data.PRICE_USD)}</div>
      <div>
        {data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD.toString().charAt(0) === "-" ? (
          <span className={"flex items-center gap-2 text-red-500 dark:text-red-400"}>
            <ArrowDown02Icon size={18} />
            {Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(2)}%
          </span>
        ) : (
          <span className={"flex items-center gap-2 text-green-600 dark:text-green-400"}>
            <ArrowUp02Icon size={18} />+{Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(2)}%
          </span>
        )}
      </div>
      <div>{formatLargeNumber(data.SPOT_MOVING_24_HOUR_QUOTE_VOLUME_DIRECT_USD)}</div>
      <div>{formatLargeNumber(data.TOTAL_MKT_CAP_USD)}</div>
      <div>
        <img className="h-8" src={`${import.meta.env.VITE_CHART_URL}/${data.SYMBOL}/USD/latest.png`} />
      </div>
    </div>
  );
};

export default CryptoRowCardItems;
