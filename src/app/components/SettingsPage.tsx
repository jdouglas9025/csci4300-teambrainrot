"use client"

import NavBar from "../components/NavBar"
import Button, {ButtonType} from "../components/Button"
import {useRouter} from "next/navigation";
import QuizPreferences from "../../unused/QuizPreferences";
import UserPreferences from "./UserPreferences"
import styles from "../css/SettingsPage.module.css"
import router from "next/navigation";
import { useDarkMode } from "./DarkModeContext";

export default function SettingsPage() {
    const router = useRouter();
    const { isDarkMode, setDarkMode } = useDarkMode()
    return (
       <div>
            <NavBar
            leftIcon={<Button buttonType={ButtonType.backArrow} onClick={() => router.push('/homepage')}/>}
            rightIcon={<Button buttonType={ButtonType.done} onClick={() => router.push('/homepage')}/>}
            title="Settings"
            editable={false}
            />

            <div className={styles.userContainer}>
                <UserPreferences />
            </div>

            <hr className={styles.line1} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <hr className={styles.line2} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <hr className={styles.line3} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <hr className={styles.line4} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>

            <hr className={styles.line5} style={{
            filter: isDarkMode ? "invert(1)" : "invert(0)",
            transition: "filter 0.3s ease",
            }}/>
            
        </div>
    );
}