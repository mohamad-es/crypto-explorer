import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import WatchListPage from "@/features/watchlist/pages/WatchListPage.tsx";
import FavoritesPage from "@/features/favorites/pages/FavoritesPage.tsx";
import SingleCryptoPage from "@/features/market/pages/SingleCryptoPage.tsx";
import MarketPage from "@/features/market/pages/MarketPage.tsx";
import LandingPage from "@/features/landing/page/LandingPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <LandingPage/>
            },
            {
                path: '/market',
                element: <MarketPage/>
            },
            {
                path: '/market/:crypto_name',
                element: <SingleCryptoPage/>
            },
            {
                path: '/watchlist',
                element: <WatchListPage/>
            },
            {
                path: '/favorites',
                element: <FavoritesPage/>
            }
        ]
    }
])