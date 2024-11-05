"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupPage.module.css'

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
            <form onSubmit={handleSubmit}>
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

                {/** No action for button since form will call handler **/}
                <Button className={styles.button} type='submit' buttonType={ButtonType.signup} onClick={() => {
                }}/>
            </form>

            <Link href='/login'>
                <p>Already have an account? <b>Login</b></p>
            </Link>
        </div>
    )
}