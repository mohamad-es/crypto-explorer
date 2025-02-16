import {data} from "@/features/landing/data.ts";
import {Link} from "react-router";

const LandingHero = () => {
    return (
        <div className={'flex flex-col items-center mt-28'}>
            <h1 className={'heading-3 text-green-title dark:text-light-title mb-4'}>{data.title}</h1>
            <p className={'subtitle-regular-1 text-grey-subtitle dark:text-light-subtitle mb-10 max-w-xl text-center'}>{data.description}</p>
            <Link to='/market' className={"btn-success"}>{data.button}</Link>
        </div>
    );
};

export default LandingHero;