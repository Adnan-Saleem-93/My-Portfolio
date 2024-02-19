import Image, {StaticImageData} from 'next/image'
import React from 'react'
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
    <div className="border border-slate-500 rounded-md min-w-[320px] h-[25rem] min-h-[25rem] mb-6 group">
      <div className="w-full h-4/5 group-hover:h-1/2">
        <Image
          src={imgSrc}
          alt={title}
          className="full--wh rounded-t-md object-cover"
          height={300}
          width={300}
        />
      </div>

      <div className="w-full h-1/5 group-hover:h-1/2 flex flex-col items-center group-hover:justify-start justify-center p-4 gap-2">
        <h3 className="text-lg text-slate-50 tracking-[4px] group-hover:hidden block">{title}</h3>
        <div className="flex-col items-center justify-between gap-2 w-full h-full hidden group-hover:flex">
          <p className="text-sm text-slate-400 line-clamp-4 flex-grow-0">{description}</p>

          <ProjectActions
            items={[
              {href: link, name: 'Demo'},
              {href: repo, name: 'Code'}
            ]}
          />
        </div>
      </div>
    </div>
  )
}
