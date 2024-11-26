"use client"

import NavBar from "../components/NavBar"
import Button, {ButtonType} from "../components/Button"
import {useRouter} from "next/navigation";
import QuizPreferences from "./QuizPreferences";
import UserPreferences from "./UserPreferences"
import styles from "../css/SettingsPage.module.css"
import router from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    return (
       <>
            <NavBar
            leftIcon={<Button buttonType={ButtonType.backArrow} onClick={() => router.push('/homepage')}/>}
            rightIcon={<Button buttonType={ButtonType.done} onClick={() => router.push('/homepage')}/>}
            title="Settings"
            editable={false}
            />

            <div className={styles.userContainer}>
                <UserPreferences />
            </div>

            <div className={styles.quizContainer}>
                <QuizPreferences />
            </div>
            
        </>
    );
}