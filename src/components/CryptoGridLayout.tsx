import {TAllCryptoResponse} from "@/features/market/types/allCryptos.ts";
import {Link} from "react-router";

type CryptoGridLayoutOptions = {
    headerItems: {
        title: string;
        colSpan: number;
    }[];
    cryptoRows: TAllCryptoResponse[] | undefined;
}

const CryptoGridLayout = ({headerItems, cryptoRows}: CryptoGridLayoutOptions) => {
    return (
        <div className={'border border-light-grey bg-white rounded-lg'}>
            <div
                className={'grid grid-cols-12 items-center py-3 px-8 last-of-type:border-none border-b border-light-grey'}>
                {headerItems.map((headerItem) => (
                    <div className={`col-span-${headerItem.colSpan}`} key={headerItem.title}>{headerItem.title}</div>
                ))}
            </div>
            {cryptoRows?.map((cryptoRow, index) => (
                <div key={cryptoRow.id}
                     className={'grid grid-cols-12 items-center py-3 px-8 last-of-type:border-none border-b border-light-grey'}>
                    <div>{index + 1}</div>
                    <div className={'flex items-center gap-5 col-span-4'}>
                        <img width={44} height={44} src={cryptoRow.image} alt={cryptoRow.name}/>
                        <div className={'flex gap-5'}>
                            {cryptoRow.name}
                            <span className={'text-grey-subtitle'}>|</span>
                            <span className={'uppercase'}>{cryptoRow.symbol}</span>
                        </div>
                    </div>
                    <div className={'col-span-2'}>{cryptoRow.current_price}</div>
                    <div className={'col-span-2'}>{cryptoRow.price_change_percentage_24h}%</div>
                    <div className={'col-span-2'}>TODO Chart</div>
                    <div className={'col-span-1'}>
                        <Link className={'btn-success justify-center'} to={`${cryptoRow.id}`}>Explore</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CryptoGridLayout;