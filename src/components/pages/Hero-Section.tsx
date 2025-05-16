import Image from 'next/image'
import { ILinkItem } from '@/utils/interfaces'
import Typewriter from '../atoms/Typewriter'
import GenericTemplate from '../templates/Generic-Template'
import Header from '../organisms/Header'
import HeroAvatar from '../molecules/Hero-Avatar'
import AboutSection from '../molecules/About-Section'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { SiUpwork } from 'react-icons/si'

const Hero = () => {
  return (
    <GenericTemplate classes="flex flex-col item-center w-full py-4">
      {/* <Header /> */}
      <div className="flex gap-x-8 items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <HeroAvatar />
          <div className="flex flex-col justify-center gap-y-4">
            <h1 className="text-slate-300 tracking-[6px] text-2xl">
              Adnan Saleem
            </h1>

            <Typewriter />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-between">
          <div className="flex items-center gap-x-4">
            <p className="text-slate-400">Find me on:</p>
            <a
              href="https://www.linkedin.com/in/adnan-saleem-199151181"
              target="_blank"
            >
              <IoLogoLinkedin
                color="white"
                size={25}
                className="!hover:fill-red-400 cursor-pointer"
              />
            </a>
            <a href="https://github.com/Adnan-Saleem-93" target="_blank">
              <IoLogoGithub
                color="white"
                size={25}
                className="!hover:fill-red-400 cursor-pointer"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~013827f5977a8f2e5e"
              target="_blank"
            >
              <SiUpwork
                color="white"
                size={25}
                className="!hover:fill-red-400 cursor-pointer"
              />
            </a>
          </div>
          <p className="text-orange-300 tracking-wider">
            adnansaleem.dev@gmail.com
          </p>
        </div>
      </div>
    </GenericTemplate>
  )
}

export default Hero
