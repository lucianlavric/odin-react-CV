import { useDarkMode } from "../../useDarkMode"


export default function DarkModeToggler() {
        const {darkMode, setDarkMode} = useDarkMode()
    return(
        <button onClick={() => setDarkMode(!darkMode)} className="px-6 py-2 bg-gray-200 rounded-md transition-all">
            {darkMode ? "Light Mode": "Dark Mode"}
        </button>
    )
}