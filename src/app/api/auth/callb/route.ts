import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const returnd = new URL(request.url)
  console.log(returnd)
}
