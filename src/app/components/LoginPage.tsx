"use client"

import React, {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupLoginPage.module.css'
import {useRouter} from "next/navigation";

export default function LoginPage() {

    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

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
                </div>

                {/** No action for button since form will call handler **/}
                <Button className={styles.button} type='submit' buttonType={ButtonType.login} onClick={() => router.push('/homepage')}/>
                {/* Ben - Made it so that the button goes to HomePage for a default to test for now */}
            </form>

            <Link className={styles.link} href='/signup'>
                <p>Don&#39;t have an account? <span>Sign up</span></p>
            </Link>
        </div>
    )
}