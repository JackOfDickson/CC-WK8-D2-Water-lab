import React, {useState, useEffect} from "react";


export const useDarkLightMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect( () => {
        toggleDarkMode()
    }, [])

    return{isDarkMode, toggleDarkMode}
} 

