import Button, {ButtonType} from './Button'
import styles from "@/app/css/LandingPage.module.css";
import React from "react";
import Logo from "@/app/components/Logo";
import Link from "next/link";


export default function LandingPage() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Logo className={styles.logo}></Logo>
                <h1 className={styles.name}>Simpli Quiz</h1>

                <h2 className={styles.description}>Simpli Create</h2>
                <h2 className={styles.description}>Simpli Learn</h2>

                <Link className={styles.link} href='/login'>
                    <Button className={styles.button} type='button' buttonType={ButtonType.login}/>
                </Link>
                <Link className={styles.link} href='/signup'>
                    <Button className={styles.button} type='button' buttonType={ButtonType.signup}/>
                </Link>
            </div>
        </div>
    );
}