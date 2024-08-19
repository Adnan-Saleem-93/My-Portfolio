import Image from 'next/image'
import { ILinkItem } from '@/utils/interfaces'
import Typewriter from '../atoms/Typewriter'
import GenericTemplate from '../templates/Generic-Template'
import Header from '../organisms/Header'
import HeroAvatar from '../molecules/Hero-Avatar'
import AboutSection from '../molecules/About-Section'

const links: ILinkItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
]

const Hero = () => {
  return (
    <GenericTemplate classes="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-x-8 items-center justify-around px-10 h-[calc(100%-90px)]">
        <HeroAvatar />

        <div className="flex flex-col justify-center w-[60%] gap-y-4">
          <h1 className="text-white tracking-[9px] text-2xl uppercase">
            Adnan Saleem{' '}
          </h1>
          <h2 className="tracking-[11px] text-gray-400">
            Full Stack Web Developer
          </h2>
          <Typewriter />
          <AboutSection />
        </div>
        {/* <div className="z-20"> */}
        {/* <div className="flex justify-center items-center pb-2">
          {links.map((link: ILinkItem, index: number) => {
            return (
              <a href={link.href} key={index}>
              <button type="button" className="link--button">
              {link.name}
              </button>
              </a>
              )
              })}
              </div> */}
        {/* </div> */}
      </div>
    </GenericTemplate>
  )
}

export default Hero
