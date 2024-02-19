'use client'

import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'
import GetInTouch from '../atoms/Get-In-Touch'

const Header = () => {
  return (
    <header className="w-full flex justify-between md:justify-around items-center absolute top-0 p-5">
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
          className="hover:scale-120"
        />
        <SocialIcon
          url="https://github.com/Adnan-Saleem-93"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-120"
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100082987400951"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-120"
        />
      </motion.div>
      <a href="#contact">
        <motion.div
          initial={{x: 500, scale: 0.5, opacity: 0}}
          animate={{x: 0, scale: 1, opacity: 1}}
          transition={{duration: 1.25}}
          className="cursor-pointer flex items-center"
        >
          <GetInTouch />
        </motion.div>
      </a>
    </header>
  )
}

export default Header
