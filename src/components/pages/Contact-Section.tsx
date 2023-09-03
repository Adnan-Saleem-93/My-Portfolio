'use client'
import AnimatedIconWithLabel from '../molecules/Animated-Icon-With-Label'
import {IAnimatedIconLabel} from '@/utils/interfaces'
import {HiLocationMarker, HiAtSymbol, HiOutlineDeviceMobile} from 'react-icons/hi'
import {AiOutlineWhatsApp, AiTwotoneMail} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import SectionTemplate from '../templates/Section-Template'
import Form from '../molecules/Form'
import * as yup from 'yup'

import {contactForm, contactDefaultValues, contactValidations} from '../../schemas/contact'
import {SubmitHandler} from 'react-hook-form'

const contactItems: IAnimatedIconLabel[] = [
  {icon: SiGmail, label: 'adnan13893@gmail.com'},
  {icon: HiLocationMarker, label: 'Rawalpindi, Punjab, Pakistan'},
  {icon: HiAtSymbol, label: 'danimalik13893@gmail.com'},
  {icon: AiOutlineWhatsApp, label: '+92-311-5484496'}
]

type InputType = yup.InferType<typeof contactValidations>

const Contact = () => {
  const onSubmit: SubmitHandler<InputType> = (data) => {
    console.log(data)
  }
  return (
    <SectionTemplate
      classes="h-screen flex flex-col relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
      sectionHeaderText="Contact"
    >
      <div className="w-full relative top-12 grid grid-cols-2 justify-center items-center space-x-8">
        {contactItems.map((item, index) => {
          const {icon, label} = item
          return <AnimatedIconWithLabel key={index} icon={icon} label={label} index={index} />
        })}
      </div>
      <div className="md:w-[50%] w-full">
        <Form
          defaultValues={contactDefaultValues}
          form={contactForm}
          validations={contactValidations}
          onSubmit={onSubmit}
        />
      </div>
    </SectionTemplate>
  )
}

export default Contact
