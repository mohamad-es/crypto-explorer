'use client'
import {layoutData} from "@/layout/layoutData.ts";
import {Link, useLocation} from "react-router";

const NavItems = () => {
    const location = useLocation();
    return (
        <ul className={'flex gap-5'}>
            {layoutData.navbar.map(((item) =>
                    <li key={item.title}>
                        <Link
                            className={`p-2 transition-all hover:text-primary ${item.link === location.pathname ? 'text-primary label-semibold-1' : 'label-medium-1 text-grey-subtitle dark:text-light-title'}`}
                            to={item.link}>{item.title}</Link>
                    </li>
            ))}
        </ul>
    );
};

export default NavItems;