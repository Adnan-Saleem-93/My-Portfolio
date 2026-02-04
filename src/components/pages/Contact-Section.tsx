'use client'

import SectionTemplate from '../templates/Section-Template'
import Form from '../molecules/Form'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import {
  contactForm,
  contactDefaultValues,
  contactValidations,
} from '../../schemas/contact'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

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
      if(response.status === 200) {
        toast.success("Message sent successfully!")
      }else{
        toast.error("Failed to send the message. Please try again later.")
      }
    } catch (error: any) {
      console.log(error)
      toast.error("Failed to send the message. Please try again later.")
    }
  }
  return (
    <SectionTemplate sectionHeaderText="Contact me">
      <div className="md:w-[75%] w-full">
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
