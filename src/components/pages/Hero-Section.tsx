import BackgroundCircles from '../molecules/Background-Circles'
import Image from 'next/image'
import profilePic from '../../../public/images/my-pic.jpg'
import Link from 'next/link'
import {ILinkItem} from '@/utils/interfaces'
import Typewriter from '../atoms/Typewriter'
import GenericTemplate from '../templates/Generic-Template'

const links: ILinkItem[] = [
  {name: 'About', href: '#about'},
  {name: 'Experience', href: '#experience'},
  {name: 'Projects', href: '#projects'},
  {name: 'Skills', href: '#skills'}
]

const Hero = () => {
  return (
    <GenericTemplate classes="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="profile-avatar"
        className="rounded-full object-cover"
        width={150}
        height={150}
      />
      <div className="z-20">
        <h1 className="text-md py-2 text-gray-400 tracking-[12px] uppercase">
          Full Stack Web Developer
        </h1>
        <Typewriter />
        <div className="flex justify-center items-center pb-2">
          {links.map((link: ILinkItem, index: number) => {
            return (
              <Link href={link.href} key={index}>
                <button className="link--button">{link.name}</button>
              </Link>
            )
          })}
        </div>
      </div>
    </GenericTemplate>
  )
}

export default Hero
