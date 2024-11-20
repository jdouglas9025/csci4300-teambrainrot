'use server'

import {signIn, signOut} from '@/auth'

export async function doLogout() {
    await signOut()
}

export async function doCredentialLogin(email: string, password: string) {
    try {
        const response = await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        if (response?.error) {
            // Failed login
            return {success: false}
        } else {
            // Valid login
            return {success: true}
        }
    } catch {
        // Unexpected error
        return {success: false}
    }
}