'use client'

import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import Link from 'next/link'
import GetInTouch from '../atoms/Get-In-Touch'

const Header = () => {
  return (
    <header className="w-full flex justify-between md:justify-around items-center sticky top-0 p-5">
      <motion.div
        initial={{x: -500, scale: 0.5, opacity: 0}}
        animate={{x: 0, scale: 1, opacity: 1}}
        transition={{duration: 1.25}}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/adnan-saleem-199151181"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Adnan-Saleem-93"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100082987400951"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{x: 500, scale: 0.5, opacity: 0}}
        animate={{x: 0, scale: 1, opacity: 1}}
        transition={{duration: 1.25}}
        className="cursor-pointer flex items-center"
      >
        <GetInTouch />
      </motion.div>
    </header>
  )
}

export default Header
