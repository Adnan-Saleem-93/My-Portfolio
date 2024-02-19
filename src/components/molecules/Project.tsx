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
      {/* <div className="absolute top-0 left-0 border rounded-md border-gray-500 full--wh group-hover:rotate-y-0 rotate-y-180 opacity-0 group-hover:opacity-100 flex flex-col justify-between text-center p-6">
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
      </div> */}
    </div>
  )
}
