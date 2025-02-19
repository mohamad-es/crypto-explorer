import CryptoRowCardItems from "@/components/Cards/CryptoRowCard/CryptoRowCardItems.tsx";
import CryptoRowCardHeader from "@/components/Cards/CryptoRowCard/CryptoRowCardHeader.tsx";
import {TCryptoResponse} from "@/types/response.ts";

export type HeaderItemsProps = {
    title: string;
    colSpan: number;
}

type CryptoRowCardProps = {
    cryptoData: TCryptoResponse[] | undefined;
}

const CryptoRowCard = ({cryptoData}: CryptoRowCardProps) => {
    console.log(cryptoData,'slm');
    return (
        <div className={'border border-light-grey bg-white dark:border-white/5 dark:bg-[#160622] dark:text-light-grey rounded-lg'}>
            <CryptoRowCardHeader/>
            {cryptoData?.map((crypto) => (
                <CryptoRowCardItems key={crypto.ID} data={crypto} />
            ))}
        </div>
    );
};

export default CryptoRowCard;