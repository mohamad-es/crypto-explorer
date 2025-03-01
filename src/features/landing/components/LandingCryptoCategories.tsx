import { useTopList } from "@/features/landing/hooks/useTopList.ts";
import RenderState from "@/utils/RenderState.tsx";
import CryptoRowCard from "@/components/Cards/CryptoRowCard";
import { landingData } from "@/features/landing/landingData.tsx";
import { Link } from "react-router";
import { useState } from "react";
import { TTopListParams } from "@/types/response.ts";
import { omit } from "lodash";
import CryptoRowCardSkeleton from "@/components/Skeleton/CryptoRowCardSkeleton";

const LandingCryptoCategories = () => {
  const [params, setParams] = useState<TTopListParams>({
    page: 1,
    page_size: 10,
    groups: "ID,BASIC,PRICE,CHANGE,MKT_CAP,VOLUME",
    sort_by: "CIRCULATING_MKT_CAP_USD",
    sort_direction: "DESC",
  });

  const { data, error, isPending } = useTopList(params);

  return (
    <div className={"container mx-auto mt-32"}>
      <h2 className={"heading-3 text-green-title dark:text-light-title"}>{landingData.categories.title}</h2>
      <p className={"mb-10 mt-4 text-green-subtitle dark:text-light-subtitle"}>{landingData.categories.description}</p>
      <div className={"flex flex-wrap gap-3 mb-4"}>
        {landingData.categories.categories.map((category) => {
          const isActive = params[category.param] === category.name;

          return (
            <button
              key={category.name}
              onClick={() => {
                setParams((prevState) =>
                  isActive ? omit(prevState, category.param) : { ...prevState, [category.param]: category.name }
                );
              }}
              className={`border rounded-lg px-3 py-2 cursor-pointer transition-all hover:shadow 
                ${
                  isActive
                    ? "bg-primary text-white dark:bg-main dark:text-white" // Active styles
                    : "bg-white text-grey-subtitle dark:bg-main/50 dark:border-white/5 dark:text-light-subtitle border-light-grey"
                }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      <RenderState isPending={isPending} error={error} data={data} loadingRender={<CryptoRowCardSkeleton count={[1,2,3,4,5,6,7,8,9,10]} />}>
        {data && <CryptoRowCard cryptoData={data.Data.LIST} />}
      </RenderState>

      <Link to={landingData.categories.link.link} className={"underline text-primary mt-10 block"}>
        {landingData.categories.link.title}
      </Link>
    </div>
  );
};

export default LandingCryptoCategories;
