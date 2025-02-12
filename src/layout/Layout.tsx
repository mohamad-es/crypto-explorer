import Header from "@/layout/Header.tsx";
import {Outlet} from "react-router";
import Footer from "@/layout/Footer.tsx";

const Layout = () => {
    return (
        <div className={'bg-pink-purple h-[100vh] overflow-auto'}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;