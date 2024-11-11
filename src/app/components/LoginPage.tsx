"use client"

import React, {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupLoginPage.module.css'
import {useRouter} from "next/navigation";
import Logo from "@/app/components/Logo";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        // Save info to db...
        console.log(email)
        console.log(password)

        // Reset fields
        setEmail('')
        setPassword('')

        // Redirect user to homepage
        router.push('/homepage')
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Logo className={styles.logo}></Logo>
                <h1 className={styles.name}>Simpli Quiz</h1>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.fieldsContainer}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    {/** No action for button since form will call handler **/}
                    <Button className={styles.button} type='submit' buttonType={ButtonType.login}/>
                </form>

                <Link className={styles.link} href='/signup'>
                    <p>Don&#39;t have an account? <span>Sign up</span></p>
                </Link>
            </div>
        </div>
    )
}