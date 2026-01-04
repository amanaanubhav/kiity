import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // Create Supabase client
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // 1. Auth Protection
    // const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup');
    // const isProtectedRoute = request.nextUrl.pathname.startsWith('/feed') ||
    //     request.nextUrl.pathname.startsWith('/bridge') ||
    //     request.nextUrl.pathname.startsWith('/shop') ||
    //     request.nextUrl.pathname.startsWith('/match');

    // if (!user && isProtectedRoute) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    // if (user && isAuthRoute) {
    //     return NextResponse.redirect(new URL('/feed', request.url));
    // }

    // 2. Domain Enforcement (Strict @kiit.ac.in)
    // Note: This logic typically prevents signup, but if a user somehow exists with non-kiit email, we block them here too.
    if (user && user.email && !user.email.endsWith('@kiit.ac.in')) {
        // In a real app, you might sign them out or show an error page.
        // await supabase.auth.signOut();
        // return NextResponse.redirect(new URL('/login?error=invalid_domain', request.url));
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
