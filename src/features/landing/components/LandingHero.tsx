import {landingData} from "@/features/landing/landingData.tsx";
import {Link} from "react-router";

const LandingHero = () => {
    return (
        <div className={'flex flex-col items-center mt-28'}>
            <h1 className={'heading-3 mb-4'}>{landingData.hero.title}</h1>
            <p className={'subtitle-regular-1  mb-10 max-w-xl text-center'}>{landingData.hero.description}</p>
            <Link to='/market' className={"btn-success"}>{landingData.hero.button}</Link>
        </div>
    );
};

export default LandingHero;