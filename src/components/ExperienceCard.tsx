import {ITechnology} from '@/utils/interfaces'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'

type Props = {
  imgSrc: StaticImageData
  alt: string
  name: string
  position: string
  period: string
  details: string[]
  technologies?: ITechnology[]
  webLink?: string
}

const ExperienceCard = ({
  imgSrc,
  alt,
  name,
  position,
  period,
  details,
  webLink,
  technologies
}: Props) => {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 min-h-[35rem] max-h-[35rem] w-[390px] md:w-[500px] md:px-8 py-8 px-6 mb-2 rounded-lg bg-gray-800 hover:bg-gray-900">
      <a href={webLink} target="_blank">
        <Image
          src={imgSrc}
          alt={alt}
          className="rounded-full mx-auto w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
        <div className="px-0 md:px:10 text-left mt-2">
          <h3 className="text-2xl text-gray-300 tracking-wide mb-1">{position}</h3>
          <h3 className="font-bold text-sm text-gray-200 tracking-wide mb-1">{name}</h3>
          <p className="text-gray-400 text-sm mb-1">{period}</p>
          <div className="flex justify-start items-center">
            {technologies?.map((technology: ITechnology, index: number): ReactNode => {
              const {name, img} = technology
              return <Image key={index} src={img} alt={name} />
            })}
          </div>
          <ul className="list-disc list-inside space-y-1 max-h-[17.5rem] xl:max-h-[13rem] mt-2 overflow-auto">
            {details.map((detail: string, index: number): ReactNode => {
              return (
                <li key={index} className="text-gray-400 text-sm">
                  {detail}
                </li>
              )
            })}
          </ul>
        </div>
      </a>
    </article>
  )
}

export default ExperienceCard
