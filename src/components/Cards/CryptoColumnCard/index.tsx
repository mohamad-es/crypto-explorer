import {ArrowUpRight01Icon} from "hugeicons-react";
import {numberSeparator} from "@/utils/numberSeparator.ts";
import {TCryptoResponse} from "@/types/response.ts";

type CryptoColumnCardProps = {
    data: TCryptoResponse
}

const CryptoColumnCard = ({data}: CryptoColumnCardProps) => {

    return (
        <div
            className={'rounded-2xl py-4 flex flex-col border border-light-grey bg-white dark:text-light-title dark:bg-main/20 dark:border-light-grey/5 cursor-pointer transition-all hover:shadow-xl'}>
            <div
                className={'flex mx-5 items-center border-b border-b-light-grey dark:border-b-light-grey/5 pb-4 gap-3'}>
                <img src={data.LOGO_URL} className={'rounded-full'} width={40} height={'100%'} alt={data.NAME}/>
                <div className={'label-semibold-1 capitalized-text'}>{data.PREVIOUS_ASSET_SYMBOLS}</div>
                <div
                    className={'bg-light-grey dark:bg-wireframe-grey dark:text-main label-semibold-2 px-2 py-1 rounded-md'}>{data.NAME}</div>
                <div className={'ms-auto bg-grey-subtitle/20 rounded-full p-1'}><ArrowUpRight01Icon
                    color={'grey'}/></div>
            </div>
            <div className={'flex gap-10 ps-5 justify-evenly font-sans mt-4'}>
                <div>
                    <h4 className={'heading-6'}>${numberSeparator(data.PRICE_USD)}</h4>
                    {/*<p className={'subtitle-medium-1 text-grey-subtitle mt-1'}>{}%</p>*/}
                </div>
            </div>
        </div>
    )
}

export default CryptoColumnCard;