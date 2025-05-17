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
      // TODO: show a success toast
      console.log(response)
    } catch (error: any) {
      // TODO: show an error toast
      console.log(error)
    }
  }
  return (
    <SectionTemplate sectionHeaderText="Contact">
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
