"use client"

import {FormEvent, useState} from "react";
import Button, {ButtonType} from "@/app/components/Button";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

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

                {/** No action for button since form will call handler **/}
                <Button type='submit' buttonType={ButtonType.login} onClick={() => {
                }}/>
            </form>
            
            <Link href='/signup'>
                <p>Don&#39;t have an account? <b>Sign-up</b></p>
            </Link>
        </>
    )
}