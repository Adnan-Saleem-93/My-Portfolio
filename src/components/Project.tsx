import Image, {StaticImageData} from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  title: string
  description?: string
  imgSrc: StaticImageData
  link?: string
  repo: string
}

export default function Project({title, description = '', imgSrc, link, repo}: Props) {
  return (
    <div className="relative min-w-[20rem] h-[25rem] min-h-[25rem] mb-6 group">
      <div className="absolute top-0 left-0 full--wh group-hover:opacity-0 group-hover:rotate-y-180">
        <Image src={imgSrc} alt={title} className="full--wh rounded-md" />
      </div>
      <div className="absolute top-0 left-0 border rounded-md border-gray-500 full--wh group-hover:rotate-y-0 rotate-y-180">
        Project
      </div>
    </div>
  )
}
