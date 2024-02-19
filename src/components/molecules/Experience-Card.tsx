import {ITechnology} from '@/utils/interfaces'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

type Props = {
  imgSrc: StaticImageData | string
  alt: string
  name: string
  position: string
  period: string
  details: string[]
  technologies?: ITechnology[]
  webLink?: string
}

const ExperienceCard = ({imgSrc, alt, name, position, period, details, webLink}: Props) => {
  return (
    <a
      href={webLink}
      target="_blank"
      className="flex flex-col space-y-3 flex-shrink-0 min-h-[32rem] h-[32rem] max-h-[32rem] w-[330px] md:w-[400px] rounded-lg border border-gray-500 hover:bg-gray-900 overflow-hidden gap-y-3"
    >
      <div className="flex md:flex-row justify-between items-center flex-col w-full md:px-4 py-3 px-3">
        <Image
          src={imgSrc}
          alt={alt}
          width={175}
          height={175}
          className="rounded-full inline lg:relative lg:top-0 lg:left-0 lg:m-0 md:mx-0 mx-auto w-28 h-28 object-cover object-center"
        />
        <div className="flex flex-col md:items-end">
          <h3 className="text-2xl text-gray-300 tracking-wide">{position}</h3>
          <h3 className="font-bold text-sm text-gray-200 tracking-wide">{name}</h3>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      </div>

      <div className="overflow-auto py-3 m-0">
        <ul className="list-none space-y-1 px-3">
          {details.map((detail: string, index: number): ReactNode => {
            return (
              <li key={index} className="text-gray-400 text-[12px] p-0 flex gap-2">
                <span className="w-[1rem]">
                  <FiArrowUpRight color="#fff" height={15} width={15} />
                </span>
                <span className="text-justify">{detail}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </a>
  )
}

export default ExperienceCard
