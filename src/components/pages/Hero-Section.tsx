import Typewriter from '../atoms/Typewriter'
import GenericTemplate from '../templates/Generic-Template'
import HeroAvatar from '../molecules/Hero-Avatar'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { SiUpwork } from 'react-icons/si'
import Email from '../atoms/Email'

const Hero = () => {
  const findMeOn = () => {
    return (
      <>
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
        <p className="text-orange-100 flex items-center gap-x-0.5">
          ↪ <Email />
        </p>
      </>
    )
  }

  return (
    <GenericTemplate classes="flex flex-col item-center w-full pb-8">
      <div className="flex md:flex-row w-full flex-col gap-8 md:items-center md:justify-between">
        <div className="flex gap-x-6 items-center w-full">
          <HeroAvatar />
          <div className="flex md:flex-row flex-col gap-y-2 justify-between w-full">
            <div className="flex flex-col justify-center gap-y-2">
              <h1 className="text-slate-300 tracking-[6px] text-2xl">
                Adnan Saleem
              </h1>

              <Typewriter />
            </div>
            <div className="flex flex-col gap-y-2 justify-evenly md:items-end">
              {findMeOn()}
            </div>
          </div>
        </div>
      </div>
    </GenericTemplate>
  )
}

export default Hero
