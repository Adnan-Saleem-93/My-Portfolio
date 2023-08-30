'use client'
import {motion} from 'framer-motion'
import AnimatedIconWithLabel from '../molecules/Animated-Icon-With-Label'
import {IAnimatedIconLabel} from '@/utils/interfaces'
import {HiLocationMarker, HiAtSymbol, HiOutlineDeviceMobile} from 'react-icons/hi'
import {AiOutlineWhatsApp, AiTwotoneMail} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import SectionTemplate from '../templates/Section-Template'

const contactItems: IAnimatedIconLabel[] = [
  {icon: SiGmail, label: 'adnan13893@gmail.com'},
  {icon: HiLocationMarker, label: 'Rawalpindi, Punjab, Pakistan'},
  {icon: HiAtSymbol, label: 'danimalik13893@gmail.com'},
  {icon: AiOutlineWhatsApp, label: '+92-311-5484496'}
]

const Contact = () => {
  return (
    <SectionTemplate
      classes="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
      sectionHeaderText="Contact"
    >
      <div className="w-full relative top-8 grid grid-cols-2 justify-center items-center space-x-2">
        {contactItems.map((item, index) => {
          const {icon, label} = item
          return <AnimatedIconWithLabel key={index} icon={icon} label={label} index={index} />
        })}
      </div>
    </SectionTemplate>
  )
}

export default Contact
