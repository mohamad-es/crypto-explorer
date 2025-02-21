import { useNavigate } from "react-router";
import { numberSeparator } from "@/utils/numberSeparator.ts";
import { TCryptoResponse } from "@/types/response.ts";
import { ArrowDown02Icon, ArrowUp02Icon } from "hugeicons-react";

type CryptoRowCardProps = {
  data: TCryptoResponse;
};

const CryptoRowCardItems = ({ data }: CryptoRowCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      key={data.ID}
      onClick={() => navigate(`/market/${data.NAME}`)}
      className={
        "grid grid-cols-12 caption-regular-1 text-black-title dark:text-light-subtitle font-sans items-center py-2 border-b dark:border-b-white/5 border-b-light-grey px-6 last-of-type:border-none border-light-grey transition-all hover:bg-gray-50 dark:hover:bg-main cursor-pointer"
      }
    >
      <div className={"flex items-center gap-3 col-span-4"}>
        <img width={44} height={44} src={data.LOGO_URL} alt={data.NAME} />
        <div className={"flex items-center gap-2"}>
          <span className={"uppercase"}>{data.PREVIOUS_ASSET_SYMBOLS}</span>
          <span className={""}>{data.NAME}</span>
        </div>
      </div>
      <div className={"col-span-2"}>
        ${numberSeparator(Number(data.PRICE_USD).toFixed(2))}
      </div>
      <div className={`col-span-2`}>
        {data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD.toString().charAt(0) ===
        "-" ? (
          <span
            className={"flex items-center gap-2 text-red-500 dark:text-red-400"}
          >
            <ArrowDown02Icon size={18} />
            {Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(2)}%
          </span>
        ) : (
          <span
            className={
              "flex items-center gap-2 text-green-600 dark:text-green-400"
            }
          >
            <ArrowUp02Icon size={18} />+
            {Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(2)}%
          </span>
        )}
      </div>
      <div className={"col-span-2"}>
        {numberSeparator(
          Number(data.SPOT_MOVING_24_HOUR_QUOTE_VOLUME_DIRECT_USD).toFixed(2),
        )}
      </div>
      <div className={"col-span-2"}>
        {numberSeparator(Number(data.TOTAL_MKT_CAP_USD).toFixed(2))}
      </div>
    </div>
  );
};

export default CryptoRowCardItems;
