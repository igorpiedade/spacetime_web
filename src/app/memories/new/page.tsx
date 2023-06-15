import { MediaPicker } from '@/components/MediaPicker'
import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="gap4 flex flex-1 flex-col">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        return to timeline
      </Link>
      <br />
      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Add Midia
          </label>

          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="text-purble-500 h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Make public
          </label>
        </div>

        <MediaPicker />

        <textarea
          name="content"
          spellCheck={false}
          className=" w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Feel free to add photos, videos and stories about that experience you want to remember forever."
        />
      </form>
    </div>
  )
}