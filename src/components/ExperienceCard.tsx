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
    <a
      href={webLink}
      target="_blank"
      className="flex flex-col items-center space-y-3 flex-shrink-0 min-h-[35rem] max-h-[35rem] w-[390px] md:w-[500px] xl:w-[47.5%] md:px-8 py-8 px-6 mb-2 rounded-lg border border-gray-500 hover:bg-gray-900"
    >
      <div className="flex md:flex-row justify-between items-center flex-col w-full mb-2">
        <Image
          src={imgSrc}
          alt={alt}
          className="rounded-full inline lg:relative lg:top-0 lg:left-0 lg:m-0 md:mx-0 mx-auto w-32 h-32 xl:w-36 xl:h-36 object-cover object-center"
        />
        <div className="flex flex-col md:items-end">
          <h3 className="text-2xl text-gray-300 tracking-wide">{position}</h3>
          <h3 className="font-bold text-sm text-gray-200 tracking-wide">{name}</h3>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      </div>
      <div className="px-0 md:px:10 text-left">
        <div className="flex justify-start items-center">
          {technologies?.map((technology: ITechnology, index: number): ReactNode => {
            const {name, img} = technology
            return <Image key={index} src={img} alt={name} />
          })}
        </div>
        <ul className="list-disc list-inside space-y-1 max-h-[17.5rem] xl:max-h-[15rem] mt-1 overflow-auto">
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
  )
}

export default ExperienceCard
