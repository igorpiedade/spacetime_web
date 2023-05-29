import Image from 'next/image'
import spacetimeLogo from '../assets/spacetimeLogo.svg'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={spacetimeLogo} alt="Spacetime Logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your time capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect your most important milestones and share - if you want - with
          the world!
        </p>
      </div>

      <a
        href=""
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
      >
        CREATE A MEMORY
      </a>
    </div>
  )
}
