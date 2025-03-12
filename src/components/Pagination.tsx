import { TTopListParams } from "@/types/response";
import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  setParams: Dispatch<SetStateAction<TTopListParams>>;
  params: TTopListParams;
  total_assets: number;
};

const Pagination = ({ setParams, params, total_assets }: PaginationProps) => {
  // const pageSize = [10, 20, 30, 40, 50];
  const pageNumber = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-between">
      {/* <div className="border rounded-lg border-light-grey h-10 text-sm bg-white dark:bg-main/30 dark:border-white/5 mt-5 overflow-hidden inline-flex font-sans">
        {pageSize.map((item) => (
          <div
            onClick={() =>
              setParams((prevParams) => ({
                ...prevParams,
                page_size: item,
              }))
            }
            className={`${
              params.page_size === item && "bg-light-title dark:bg-main"
            } cursor-pointer flex items-center justify-center h-full border-e px-4 transition-all hover:bg-light-title border-e-light-grey dark:text-light-title dark:border-white/5 dark:hover:bg-main`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <div className="border rounded-lg border-light-grey h-10 text-sm bg-white dark:bg-main/30 dark:border-white/5 mt-5 overflow-hidden inline-flex font-sans">
        {pageNumber.map((item) => (
          <div
            onClick={() =>
              setParams((prevParams) => ({
                ...prevParams,
                page: item,
              }))
            }
            className={`${params.page === item && "bg-light-title dark:bg-main"}
            cursor-pointer flex items-center justify-center h-full border-e px-4 transition-all hover:bg-light-title border-e-light-grey dark:text-light-title dark:border-white/5 dark:hover:bg-main`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
