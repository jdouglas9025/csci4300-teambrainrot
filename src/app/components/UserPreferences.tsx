"use client"

import { useState, useEffect } from "react";
import styles from "../css/QuizPreferences.module.css"
import { useDarkMode } from "./DarkModeContext";


export default function UserPreferences({}) {
   
    const { isDarkMode, setDarkMode } = useDarkMode();

    return (
        <div className={styles.container} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
        }}>
            <h2 className={styles.title}>User Preferences:</h2>
            <hr className={styles.separator} />
            
            <div className={styles.preference}>
                <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setDarkMode(!isDarkMode)}
                className={styles.toggle}
                />
                <label className={styles.label}>Dark Mode</label>
            </div>
        </div>
    );
}