import {landingHeroData} from "@/features/landing/data/landingHeroData.ts";

const LandingHero = () => {
    return (
        <div className={'flex flex-col items-center mt-28'}>
            <h1 className={'heading-3 text-green-title dark:text-light-title mb-4'}>{landingHeroData.title}</h1>
            <p className={'subtitle-regular-1 text-grey-subtitle dark:text-light-subtitle mb-10 max-w-xl text-center'}>{landingHeroData.description}</p>
            <button className={"btn-success"}>{landingHeroData.button}</button>
        </div>
    );
};

export default LandingHero;