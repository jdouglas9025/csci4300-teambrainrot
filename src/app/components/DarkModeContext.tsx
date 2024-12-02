'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type DarkModeContextType = {
    isDarkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setDarkMode] = useState(false);

//loading from localStorage 
    useEffect(() => {
        const savedMode = localStorage.getItem("dark-mode");
        if (savedMode !== null) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    //saving mode 
    useEffect(() => {
        localStorage.setItem("dark-mode", String(isDarkMode))

        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

// Hook for using the context
export function useDarkMode() {
    const context = useContext(DarkModeContext)

    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }

    return context;
}
