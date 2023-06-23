import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', process.env.NEXT_APP_URL)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': 'token=expired; Path=/; max-age=0',
    },
  })
}
