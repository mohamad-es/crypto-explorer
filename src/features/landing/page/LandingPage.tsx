import LandingHero from "@/features/landing/components/LandingHero.tsx";
import {Fragment} from "react";
import LandingFeatures from "@/features/landing/components/LandingFeatures.tsx";
import LandingCryptoCategories from "@/features/landing/components/LandingCryptoCategories.tsx";
import LandingTrendCryptos from "@/features/landing/components/LandingTrendCryptos.tsx";

const LandingPage = () => {

    return (
        <Fragment>
            <LandingHero/>
            <LandingTrendCryptos/>
            <LandingFeatures />
            <LandingCryptoCategories />
        </Fragment>
    );
};

export default LandingPage;