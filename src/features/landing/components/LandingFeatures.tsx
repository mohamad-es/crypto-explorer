import {landingData} from "@/features/landing/landingData.tsx";
import FeatureCard from "@/features/landing/components/FeatureCard.tsx";

const LandingFeatures = () => {
    return (
        <div className={'container mx-auto mt-32'}>
            <h2 className={'heading-3 text-center text-green-title dark:text-light-title'}>{landingData.features.title}</h2>
            <p className={'mt-4 text-center text-green-subtitle dark:text-light-subtitle'}>{landingData.features.description}</p>
            <div className={'grid grid-cols-4 gap-5 mt-20'}>
                {landingData.features.cards.map((card) => (
                    <FeatureCard key={card.title} {...card} />
                ))}
            </div>
        </div>
    );
};

export default LandingFeatures;