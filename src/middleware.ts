import { NextRequest, NextResponse } from 'next/server'

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${process.env.NEXT_APP_URL}; Path=/; HttpOnly; max-age=15`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:patch*',
}
