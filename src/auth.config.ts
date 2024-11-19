import {NextAuthConfig} from 'next-auth'

// Set Jwt in cookie as session strategy
export const authConfig: NextAuthConfig = {
    session: {
        strategy: 'jwt'
    },
    providers: []
}