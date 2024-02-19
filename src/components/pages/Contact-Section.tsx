'use client'
import AnimatedIconWithLabel from '../molecules/Animated-Icon-With-Label'
import {IAnimatedIconLabel} from '@/utils/interfaces'
import {HiLocationMarker, HiAtSymbol} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import SectionTemplate from '../templates/Section-Template'
import Form from '../molecules/Form'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import {contactForm, contactDefaultValues, contactValidations} from '../../schemas/contact'
import {SubmitHandler} from 'react-hook-form'

const contactItems: IAnimatedIconLabel[] = [
  {icon: <SiGmail />, label: 'adnan13893@gmail.com'},
  {icon: <HiLocationMarker />, label: 'Rawalpindi, Punjab, Pakistan'},
  {icon: <HiAtSymbol />, label: 'danimalik13893@gmail.com'},
  {icon: <AiOutlineWhatsApp />, label: '+92-311-5484496'}
]

type InputType = yup.InferType<typeof contactValidations>

const Contact = () => {
  const onSubmit: SubmitHandler<InputType> = async (data) => {
    try {
      const response = await emailjs.send(
        'service_yc36ptr',
        'template_0vc93tf',
        data,
        '7ocdXk-QjLZPjt_A5'
      )
      console.log(response)
    } catch (error: any) {
      console.log(error)
    }
  }
  return (
    <SectionTemplate
      classes="h-screen flex flex-col relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
      sectionHeaderText="Contact"
    >
      <div className="relative md:w-[50%] w-full top-12">
        <Form
          defaultValues={contactDefaultValues}
          form={contactForm}
          validations={contactValidations}
          onSubmit={onSubmit}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h3 className="text-center tracking-[10px] text-gray-400 text-sm">
          Additional Contact Details
        </h3>
        <div className="sm:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3">
          {contactItems.map((item, index) => {
            const {icon, label} = item
            return <AnimatedIconWithLabel key={index} Icon={icon} label={label} />
          })}
        </div>
      </div>
    </SectionTemplate>
  )
}

export default Contact
