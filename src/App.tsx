import {Outlet} from "react-router";
import Footer from "./layout/Footer.tsx";
import Header from "./layout/Header.tsx";


function App() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;