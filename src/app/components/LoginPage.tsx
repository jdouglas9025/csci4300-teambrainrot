"use client"

import React, {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";
import styles from '../css/SignupLoginPage.module.css'
import {useRouter} from "next/navigation";
import Logo from "@/app/components/Logo";
import {doCredentialLogin} from "@/login";
import { useDarkMode } from "./DarkModeContext";

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        // Verify fields aren't blank
        if (email === '' || password === '') {
            return
        }

        // Attempt login
        const result = await doCredentialLogin(email, password)
        if (result.success) {
            // Successful login
            router.push('/homepage')
        } else {
            alert('Login failed. Please try again.')
        }

        // Reset fields
        setEmail('');
        setPassword('');
    }

    const { isDarkMode, setDarkMode } = useDarkMode()

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Logo className={`${styles.logo} ${isDarkMode ? styles.darkMode : ''}`}></Logo>
                <h1 className={styles.name} >Simpli Quiz</h1>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.fieldsContainer}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email" style={{
                            filter: isDarkMode ? "invert(1)" : "invert(0)"
                            }}>Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email} 
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password" style={{
                            filter: isDarkMode ? "invert(1)" : "invert(0)"
                            }}>Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                    </div>

                    {/** No action for button since form will call handler **/}
                    <Button className={`${styles.button} ${isDarkMode ? styles.darkMode : ''}`}  type='submit' buttonType={ButtonType.login}/>
                </form>

                <Link className={styles.link} href='/signup'>
                    <p style={{
                    filter: isDarkMode ? "invert(1)" : "invert(0)"
            }}>Don&#39;t have an account? <span>Sign up</span></p>
                </Link>
            </div>
        </div>
    )
}