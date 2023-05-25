import { User } from 'lucide-react'
import Image from 'next/image'

import spacetimeLogo from '../assets/spacetimeLogo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Strips */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* User Profile */}
        <a href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 text-gray-500" />
          </div>
          <p className="max-w-[160px] text-sm leading-snug">
            {' '}
            <span className="underline hover:text-gray-50">
              Create your account{' '}
            </span>{' '}
            and salve your memories{' '}
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={spacetimeLogo} alt="Spacetime Logo" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect your most important milestones and share - if you want -
              with the world!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
          >
            CREATE A MEMORY
          </a>
        </div>

        {/* copyright */}
        <div className=" text-sm leading-relaxed text-gray-200">
          Created by{' '}
          <a
            target='"blank'
            rel="noreferrer"
            href="mailto:igorpiedade+website@gmail.com"
            className="underline hover:text-gray-100"
          >
            Igor Piedade
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex  flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You didn&apos;t created any memory yet, start creating your post
            first{' '}
            <a href="" className="underline hover:text-gray-50">
              here
            </a>{' '}
            !
          </p>
        </div>
      </div>
    </main>
  )
}
