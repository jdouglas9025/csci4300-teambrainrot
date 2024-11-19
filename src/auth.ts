import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import {User} from '../models/UserSchema'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null // No credentials defined
                }

                try {
                    const user = await User.findOne({email: credentials.email}).lean()

                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )

                        if (isMatch) {
                            return {
                                id: user._id.toString(), // Mongo DB Id
                                email: user.email
                            }
                        } else {
                            console.log('Email or password is not correct')
                            return null;
                        }
                    } else {
                        console.log('User not found')
                        return null
                    }
                } catch (error: any) {
                    // Error occurred
                    console.log('Error occurred in auth.ts: ', error)
                    return null
                }
            }
        })
    ]
})