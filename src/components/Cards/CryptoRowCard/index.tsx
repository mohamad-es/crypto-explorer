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
        <div className={'border border-light-grey bg-white rounded-lg'}>
            <CryptoRowCardHeader/>
            {cryptoData?.map((crypto, index) => (
                <CryptoRowCardItems key={crypto.id} data={crypto} index={index}/>
            ))}
        </div>
    );
};

export default CryptoRowCard;