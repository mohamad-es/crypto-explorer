import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {router} from "./router";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>,
)
