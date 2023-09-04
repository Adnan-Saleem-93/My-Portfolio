import {IContactForm} from '@/utils/interfaces'
import * as yup from 'yup'

export const contactForm: IContactForm = {
  first_name: {
    name: 'first_name',
    label: 'First Name',
    type: 'text',
    placeholder: 'First Name',
    errorMessage: 'First Name is required.',
    colSpan: 'col-span-1' // grid column span
  },
  last_name: {
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Last Name',
    colSpan: 'col-span-1'
  },
  email: {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    placeholder: 'Email Address',
    errorMessage: 'Email Address is required.',
    invalidMessage: 'Please enter a valid Email Address',
    colSpan: 'col-span-2'
  },
  message: {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Message',
    errorMessage: 'Message is required.',
    colSpan: 'col-span-2'
  }
}

const {first_name, last_name, email, message} = contactForm

export const contactDefaultValues = {
  [first_name.name]: '',
  [last_name.name]: '',
  [email.name]: '',
  [message.name]: ''
}

export const contactValidations = yup
  .object({
    [first_name.name]: yup.string().required(first_name.errorMessage),
    [last_name.name]: yup.string(),
    [email.name]: yup.string().required(email.errorMessage).email(email.invalidMessage),
    [message.name]: yup.string().required(message.errorMessage)
  })
  .required()
