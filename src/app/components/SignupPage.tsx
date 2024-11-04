"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";

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
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />

                {/** No action for button since form will call handler **/}
                <Button type='submit' buttonType={ButtonType.signup} onClick={() => {
                }}/>
            </form>

            <Link href='/login'>
                <p>Already have an account? <b>Login</b></p>
            </Link>
        </>
    )
}