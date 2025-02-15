import LandingHero from "@/features/landing/components/LandingHero.tsx";
import LandingTrendCryptos from "@/features/landing/components/LandingTrendCryptos.tsx";
import {Fragment} from "react";

const LandingPage = () => {
    return (
        <Fragment>
            <LandingHero/>
            <LandingTrendCryptos />
        </Fragment>
    );
};

export default LandingPage;