'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import myPic2 from '/public/images/my-pic-2.jpg'

type Props = {}

export default function AboutSectionImage({}: Props) {
  return (
    <motion.div
      initial={{x: -500, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.5}}
    >
      <Image
        src={myPic2}
        alt="about-section-pic"
        className="-mb-32 md:mb-0 flex-shrink-0 w-48 h-48 md:w-80 md:h-96 object-cover xl:w-[325px] xl:h-[425px] py-2 rounded-full lg:rounded-[1.5rem]"
      />
    </motion.div>
  )
}
