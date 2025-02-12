import {useTheme} from "@/hooks/useTheme.ts";
import {Moon02Icon, Sun03Icon} from "hugeicons-react";

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer"
        >
            {theme === "light" ? (
                <Moon02Icon color={'black'} className="w-7 h-7"/>
            ) : (
                <Sun03Icon color={'white'} className="w-7 h-7"/>
            )}
        </button>
    );
}
