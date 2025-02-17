import {useTopList} from "@/features/landing/hooks/useTopList.ts";
import RenderState from "@/utils/RenderState.tsx";
import CryptoRowCard from "@/components/Cards/CryptoRowCard";
import {landingData} from "@/features/landing/landingData.tsx";
import {Link} from "react-router";

const LandingCryptoCategories = () => {
    const {data, error, isPending} = useTopList()

    return (
        <div className={'container mx-auto mt-32'}>
            <h2 className={'heading-3 text-green-title dark:text-light-title'}>{landingData.categories.title}</h2>
            <p className={'mb-10 mt-4 text-green-subtitle dark:text-light-subtitle'}>{landingData.categories.description}</p>
            <div className={'flex flex-wrap gap-3 mb-4'}>
                {landingData.categories.categories.map((category) => (
                    <button
                        className={'border bg-white dark:bg-main/50 dark:border-white/5 dark:text-light-subtitle border-light-grey text-grey-subtitle caption-regular-1 cursor-pointer transition-all hover:shadow rounded-lg px-3 py-2'}>{category.title}</button>
                ))}
            </div>

            <RenderState isPending={isPending} error={error} data={data}>
                {data && <CryptoRowCard cryptoData={data.Data.LIST}/>}
            </RenderState>

            <Link to={landingData.categories.link.link} className={'underline text-primary mt-10 block'}>
                {landingData.categories.link.title}
            </Link>
        </div>
    );
};

export default LandingCryptoCategories;