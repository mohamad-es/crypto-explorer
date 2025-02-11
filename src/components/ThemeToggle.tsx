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
                <Moon02Icon className="w-6 h-6 "/>
            ) : (
                <Sun03Icon className="w-6 h-6 "/>
            )}
        </button>
    );
}
