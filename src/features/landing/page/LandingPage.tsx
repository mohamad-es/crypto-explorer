import LandingHero from "@/features/landing/components/LandingHero";

const LandingPage = () => {
    // const params = {
    //     vs_currency: "usd",
    //     order: "market_cap_desc",
    //     per_page: 10,
    //     page: 1,
    //     sparkline: false
    // }
    //
    // const {datas, isPending, error} = useAllCrypto(params)

    // console.log(datas)
    //
    // if (isPending) return <div>Loading...</div>
    // if (error) return <div>Error: {error.message}</div>
    // if(datas.length === 0) return <div>no item found</div>

    return (
        <div>
            <LandingHero />
        </div>
    );
};

export default LandingPage;