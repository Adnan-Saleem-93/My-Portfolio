import Image, {StaticImageData} from 'next/image'
import React from 'react'
import ProjectActionButton from '../atoms/Project-Action-Button'
import ProjectActions from './Project-Actions'

type Props = {
  title: string
  description?: string
  imgSrc: StaticImageData | string
  link: string
  repo: string
}

export default function Project({title, description = '', imgSrc, link, repo}: Props) {
  return (
    <div className="relative min-w-[25rem] h-[25rem] min-h-[25rem] mb-6 group">
      <div className="absolute top-0 left-0 full--wh group-hover:opacity-0 group-hover:rotate-y-180">
        <Image
          src={imgSrc}
          alt={title}
          className="full--wh rounded-md object-cover"
          height={400}
          width={400}
        />
      </div>
      <div className="absolute top-0 left-0 border rounded-md border-gray-500 full--wh group-hover:rotate-y-0 rotate-y-180 opacity-0 group-hover:opacity-100 flex flex-col justify-between text-center p-6">
        <div>
          <h3 className="text-2xl text-slate-50 tracking-[4px] mb-5">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
        <ProjectActions
          items={[
            {href: link, name: 'Demo'},
            {href: repo, name: 'Code'}
          ]}
        />
      </div>
    </div>
  )
}
