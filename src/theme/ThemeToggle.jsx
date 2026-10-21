import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if(storedTheme !== null)
        {
            (async () => {
                setDarkMode(storedTheme === "dark" ? true : false);
            })();
        }
    }, []);

    useEffect(() => {
        if( darkMode === null )
        {
            return;
        }

        const theme = darkMode === true ? "dark" : "light";
        
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [darkMode]);

    return (<button
    className="btn btn-outline-secondary"
    onClick={() => setDarkMode(!darkMode)}
    >
        Theme {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>);
};

export default ThemeToggle;
