import {IContactForm} from '@/utils/interfaces'
import * as yup from 'yup'

export const contactForm: IContactForm = {
  name: {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
    errorMessage: 'Name is required.'
  },
  email: {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    placeholder: 'Email Address',
    errorMessage: 'Email Address is required.',
    invalidMessage: 'Please enter a valid Email Address'
  },
  subject: {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'Subject',
    errorMessage: 'Subject is required.'
  },
  message: {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Message',
    errorMessage: 'Message is required.'
  }
}

const {name, subject, email, message} = contactForm

export const contactDefaultValues = {
  [name.name]: '',
  [subject.name]: '',
  [email.name]: '',
  [message.name]: ''
}

export const contactValidations = yup
  .object({
    [name.name]: yup.string().required(name.errorMessage),
    [subject.name]: yup.string().required(subject.errorMessage),
    [email.name]: yup.string().required(email.errorMessage).email(email.invalidMessage),
    [message.name]: yup.string().required(message.errorMessage)
  })
  .required()
