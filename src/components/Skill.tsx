import {motion} from 'framer-motion'
import {StaticImageData} from 'next/image'

type Props = {alt: string; img: StaticImageData | null; direction?: string}

export default function Skill({alt = '', img, direction = 'left'}: Props) {
  return (
    <motion.div
      initial={{opacity: 0, x: direction === 'left' ? -200 : 200}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5}}
      className="flex--centered--row group relative rounded-full skill--image border border-gray-600"
    >
      Skill
      <div className="flex--centered--row absolute top-0 text-black sm:text-2xl text-2xl lg:text-4xl font-bold rounded-full skill--image group-hover:opacity-90 opacity-0 transition-all duration-200 ease-in-out bg-slate-300">
        100%
      </div>
    </motion.div>
  )
}
