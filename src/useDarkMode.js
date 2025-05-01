import { createContext, useContext } from "react";


export const useDarkMode = () => useContext(ThemeContext);
 
export const ThemeContext = createContext('light');
