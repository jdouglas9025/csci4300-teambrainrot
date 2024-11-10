"use client" // Need to prevent an issue with actions for button

import LoginPage from "@/app/components/LoginPage";
import QuizTakingPage, {sample} from "@/app/components/QuizTakingPage";
import QuizResultsPage from "@/app/components/QuizResultsPage";
import {sampleQuiz} from "@/app/interfaces";

export default function Home() {
    return (
        <h1>Simpli Quiz</h1>
        <p>Simpli Create.</p>
        <p>Simpli Learn.</p>
        <Button className={styles.button} type='login' buttonType={ButtonType.login} onClick={() => router.push('@/app/components/LoginPage')}/>
        <Button className={styles.button} type='signup' buttonType={ButtonType.signup} onClick={() => router.push('@/app/components/SignupPage')}/>

      );
}
