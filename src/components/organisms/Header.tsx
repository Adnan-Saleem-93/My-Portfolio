'use client'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import GetInTouch from '../atoms/Get-In-Touch'
import { useState } from 'react'

const Header = () => {
  const [socialIcons, setSocialIcons] = useState([
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/adnan-saleem-199151181',
      fgColor: 'gray',
      isHovered: false,
      hoverColor: '#0077b5',
    },
    {
      id: 'github',
      url: 'https://github.com/Adnan-Saleem-93',
      fgColor: 'gray',
      isHovered: false,
      hoverColor: '#fff',
    },
    {
      id: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100082987400951',
      fgColor: 'gray',
      isHovered: false,
      hoverColor: '#316FF6',
    },
  ])

  const setHoverState = ({
    id,
    isHovered,
  }: {
    id: string
    isHovered: boolean
  }) => {
    const newIcons = [...socialIcons]
    const matchedIconIndex = newIcons.findIndex((x) => x.id === id)
    if (matchedIconIndex > -1) {
      newIcons[matchedIconIndex].isHovered = isHovered
    }
    setSocialIcons(newIcons)
  }
  return (
    <header className="w-full flex justify-between md:justify-around items-center p-5">
      <motion.div
        initial={{ x: -500, scale: 0.5, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        {socialIcons.map((icon) => {
          const { id, url, fgColor, isHovered, hoverColor } = icon
          return (
            <SocialIcon
              key={id}
              url={url}
              target="_blank"
              fgColor={isHovered ? hoverColor : fgColor}
              bgColor="transparent"
              onMouseEnter={() => setHoverState({ id, isHovered: true })}
              onMouseLeave={() => setHoverState({ id, isHovered: false })}
            />
          )
        })}
      </motion.div>
      <a href="#contact">
        <motion.div
          initial={{ x: 500, scale: 0.5, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.25 }}
          className="cursor-pointer flex items-center"
        >
          <GetInTouch />
        </motion.div>
      </a>
    </header>
  )
}

export default Header
