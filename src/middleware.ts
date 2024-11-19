import {NextResponse} from "next/server";
import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";

const {auth} = NextAuth(authConfig)

export async function middleware(request: any) {
    const session = await auth()
    const isAuthenticated = !!session?.user
    const {pathname} = request.nextUrl

    const allowedRoutes = ['/', '/login', '/signup']

    if (allowedRoutes.includes(pathname)) {
        // Non-protected route
        return NextResponse.next()
    } else if (!isAuthenticated) {
        // Unauthenticated user trying to access protected route
        return NextResponse.redirect(new URL('/login', request.url)) // Redirect to login screen
    } else {
        return NextResponse.next() // Authenticated user accessing protected route
    }
}

// Config required
export const config = {
    // Routes to restrict (restrict all routes except those defined as allowed)
    matcher: [
        '/settingspage',
        '/quizeditpage',
        '/quiz/:path*',
        '/homepage'
        // Add additional routes as needed
    ]
}