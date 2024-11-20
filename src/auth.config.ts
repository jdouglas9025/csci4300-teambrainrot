import {NextAuthConfig} from 'next-auth'

// Set Jwt in cookie as session strategy
export const authConfig: NextAuthConfig = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        // JWT callback to add user id to the token
        async jwt({ token, user }) {
    if (user) {
        token.id = user.id as string
    }
    return token;
    },
    // Session callback to add the user id to the session
    async session({ session, token }) {
        if (token.id) {
            session.user.id = token.id as string
        }
        return session;
    }
    },
    providers: []
}