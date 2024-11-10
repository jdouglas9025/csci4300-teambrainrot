import Button, {ButtonType} from './Button'
import Link from "next/link";
import styles from "@/app/css/LandingPage.module.css";
import React from "react";


export default function LandingPage() {
    return (
        <div>
            <p>Logo Placeholder</p>
            <h1>Simpli Quiz</h1>
            <p>Simpli Create</p>
            <p>Simpli Learn</p>

            <Link href={'/login'}>
                <Button className={styles.button} type='button' buttonType={ButtonType.login}/>
            </Link>

            <Link href={'/signup'}>
                <Button className={styles.button} type='button' buttonType={ButtonType.signup}/>
            </Link>
        </div>
    );
}