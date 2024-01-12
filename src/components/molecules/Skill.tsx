import {generalImageURL} from '@/utils/helper-methods'
import Image, {StaticImageData} from 'next/image'

type Props = {alt: string; img: StaticImageData | string | null; proficiency: string; title: string}

export default function Skill({alt, img, proficiency, title}: Props) {
  const imgSrc = generalImageURL(img)
  return (
    <div
      className="flex--centered--row group relative rounded-full skill--image border border-gray-600 bg-[#ffffff33]"
      title={title}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={190}
        height={190}
        className="rounded-full object-cover"
      />
      <div className="flex--centered--row absolute top-0 text-black sm:text-2xl text-2xl lg:text-4xl font-bold rounded-full skill--image group-hover:opacity-90 opacity-0 transition-all duration-200 ease-in-out bg-slate-300">
        {proficiency}
      </div>
    </div>
  )
}
