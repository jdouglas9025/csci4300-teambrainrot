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

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        // Verify fields aren't blank and passwords match
        if (email === '' || password === '' || confirmPassword === '' || password !== confirmPassword) {
            alert('Check email/password fields and try again.')
            return
        }

        // Create user in DB
        const data = {
            email: email,
            password: password
        }

        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            alert('Failed to create an account. Please try again.')
        } else {
            alert('Successfully created an account. Please login using the provided information.')

            // Redirect user to login page
            router.push('/login')
        }

        // Reset fields
        setEmail('')
        setPassword('')
        setConfirmPassword('')
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