"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupLoginPage.module.css'
import {useRouter} from "next/navigation";
import Logo from "@/app/components/Logo";

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const router = useRouter()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        // Save info to db...
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        // Reset fields
        setEmail('')
        setPassword('')
        setConfirmPassword('')

        alert('Successfully created an account. Please login using the provided information.')

        // Redirect user to login page
        router.push('/login')
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Logo></Logo>
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
                    <Button className={styles.button} type='submit' buttonType={ButtonType.signup}/>
                </form>

                <Link className={styles.link} href='/login'>
                    <p>Already have an account? <span>Login</span></p>
                </Link>
            </div>
        </div>
    )
}