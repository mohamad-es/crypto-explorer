import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import FavoritesPage from "@/features/favorites/pages/FavoritesPage.tsx";
import MarketPage from "@/features/market/pages/MarketPage.tsx";
import LandingPage from "@/features/landing/page/LandingPage.tsx";
import SingleCryptoPage from "@/features/market/pages/SingleCryptoPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/market",
        element: <MarketPage />,
      },
      {
        path: "/market/:crypto_id",
        element: <SingleCryptoPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
