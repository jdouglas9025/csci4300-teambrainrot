"use client"

import NavBar from "../components/NavBar"
import Button, {ButtonType} from "../components/Button"
import {useRouter} from "next/navigation";
import QuizPreferences from "./QuizPreferences";
import styles from "../css/SettingsPage.module.css"
import router from "next/navigation";

export default function SettingsPage() {
    return (
       <>
            <NavBar
            leftIcon={<Button buttonType={ButtonType.backArrow}/>}
            rightIcon={<Button buttonType={ButtonType.done}/>}
            title="Settings"
            editable={false}
            />

            <div>
                <QuizPreferences />
            </div>
            <div>
                <Button buttonType={ButtonType.edit} onClick={() => router.push('/quizeditpage')}/>
            </div>
        </>
    );
}