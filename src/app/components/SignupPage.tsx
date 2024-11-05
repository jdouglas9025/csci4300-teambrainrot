"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupLoginPage.module.css'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        // Check passwords...

        console.log('Logged in...')
    }

    return (
        <div className={styles.container}>
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

                    <div className={styles.inputContainer}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={event => setConfirmPassword(event.target.value)}
                        />
                    </div>
                </div>

                {/** No action for button since form will call handler **/}
                <Button className={styles.button} type='submit' buttonType={ButtonType.signup} onClick={() => {
                }}/>
            </form>

            <Link className={styles.link} href='/login'>
                <p>Already have an account? <span>Login</span></p>
            </Link>
        </div>
    )
}