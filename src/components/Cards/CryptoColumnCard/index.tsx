import {
  ArrowDown02Icon,
  ArrowUp02Icon,
  ArrowUpRight01Icon,
} from "hugeicons-react";
import { numberSeparator } from "@/utils/numberSeparator.ts";
import { TCryptoResponse } from "@/types/response.ts";

type CryptoColumnCardProps = {
  cryptoName: string;
  data: TCryptoResponse;
};

const CryptoColumnCard = ({ data, cryptoName }: CryptoColumnCardProps) => {
  return (
    <div
      className={
        "rounded-2xl py-4.5 flex flex-col border border-light-grey bg-white dark:text-light-title dark:bg-main/20 dark:border-light-grey/5 cursor-pointer transition-all hover:shadow-xl"
      }
    >
      <div
        className={
          "flex mx-5 items-center border-b border-b-light-grey dark:border-b-light-grey/5 pb-4 gap-3.5"
        }
      >
        <img src={data.LOGO_URL} width={50} height={50} alt={data.NAME} />
        <div
          className={
            "capitalized-text text-main font-semibold dark:text-light-title"
          }
        >
          {cryptoName}
        </div>
        <div
          className={
            "bg-light-grey dark:bg-wireframe-grey dark:text-main text-[10px] font-semibold px-1.5 py-1 rounded-md"
          }
        >
          {data.NAME}
        </div>
        <div className={"ms-auto rounded-full p-1"}>
          <ArrowUpRight01Icon color={"grey"} />
        </div>
      </div>

      <div className={"flex gap-10 justify-between px-5 font-sans mt-4"}>
        <h4 className={"heading-5 text-main dark:text-light-title"}>
          ${numberSeparator(Number(data.PRICE_USD).toFixed(2))}
        </h4>
        <p className={`subtitle-medium-1 text-grey-subtitle mt-1 `}>
          {data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD.toString().charAt(
            0,
          ) === "-" ? (
            <span className={"text-red-500 gap-2 flex items-center"}>
              <ArrowDown02Icon size={18} />
              {Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(
                2,
              )}
              %
            </span>
          ) : (
            <span className={"text-primary flex gap-2 items-center"}>
              <ArrowUp02Icon size={18} />
              {Number(data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD).toFixed(
                2,
              )}
              %
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CryptoColumnCard;
