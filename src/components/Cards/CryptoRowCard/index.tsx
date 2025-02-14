import {TAllCryptoResponse} from "@/features/market/types/allCryptos.ts";
import CryptoRowCardItems from "@/components/Cards/CryptoRowCard/CryptoRowCardItems.tsx";
import CryptoRowCardHeader from "@/components/Cards/CryptoRowCard/CryptoRowCardHeader.tsx";

export type HeaderItemsProps = {
    title: string;
    colSpan: number;
}

type CryptoRowCardProps = {
    cryptoData: TAllCryptoResponse[] | undefined;
}

const CryptoRowCard = ({cryptoData}: CryptoRowCardProps) => {

    return (
        <div className={'border border-light-grey bg-white dark:border-main dark:bg-[#160622] dark:text-light-grey rounded-xl'}>
            <CryptoRowCardHeader/>
            {cryptoData?.map((crypto) => (
                <CryptoRowCardItems key={crypto.id} data={crypto} />
            ))}
        </div>
    );
};

export default CryptoRowCard;