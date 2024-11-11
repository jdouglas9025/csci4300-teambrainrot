"use client"

import NavBar from "../components/NavBar"
import Button, {ButtonType} from "../components/Button"
import {useRouter} from "next/navigation";
import QuizPreferences from "./QuizPreferences";
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

            <div className={styles.container}>
                <QuizPreferences />
            </div>
            <div className={styles.editSection}>
                <Button buttonType={ButtonType.edit} onClick={() => router.push('/quizeditpage')} className={styles.editButton}/>
                <span className={styles.deleteText}>Delete</span>
            </div>
        </>
    );
}