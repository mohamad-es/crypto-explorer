import {headerData} from "@/features/Landing/data/headerData.ts";
import {Link} from "react-router";
import ThemeToggle from "@/components/ThemeToggle.tsx";

const Header = () => {
    return (
        <div className={'flex justify-between'}>
            <div>Logo</div>
            <ul className={'flex gap-4'}>
                {headerData.navbar.map((item) => (
                    <li><Link to={item.link}>{item.title}</Link></li>
                ))}
            </ul>
            <div>
                <ThemeToggle/>
            </div>
        </div>
    );
};

export default Header;
