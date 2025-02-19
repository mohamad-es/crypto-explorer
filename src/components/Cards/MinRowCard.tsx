import {TSearchListResponse} from "@/types/response.ts";
import {useNavigate} from "react-router";

type MinRowCardProps = {
    data: TSearchListResponse
}

const MinRowCard = ({data}: MinRowCardProps) => {
    const navigate = useNavigate()

    return (
        <div
            key={data.ID}
            onClick={() => navigate(`/market/${data.NAME}`)}
            className={'flex caption-regular-1 text-black-title dark:text-light-subtitle font-sans items-center py-2 border-b dark:border-b-white/5 border-b-light-grey px-6 last-of-type:border-none border-light-grey transition-all hover:bg-gray-50 dark:hover:bg-main cursor-pointer'}>
            <div className={'flex items-center gap-3 col-span-4'}>
                <img width={44} height={44} src={data.LOGO_URL} alt={data.NAME}/>
                <div className={'flex items-center gap-2'}>
                    <span className={'uppercase'}>{data.SYMBOL}</span>
                    <span className={''}>{data.NAME}</span>
                </div>
            </div>
        </div>
    );
};

export default MinRowCard;