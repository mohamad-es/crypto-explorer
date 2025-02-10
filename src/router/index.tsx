import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import LandingPage from "../features/Landing/LandingPage.tsx";
import AllCryptosPage from "@/features/Crypto/pages/AllCryptosPage.tsx";
import SingleCryptoPage from "@/features/Crypto/pages/SingleCryptoPage.tsx";

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
                path: '/crypto',
                element: <AllCryptosPage/>
            },
            {
                path: '/crypto/:crypto_name',
                element: <SingleCryptoPage/>
            }
        ]
    }
])