import {contactForm} from './form'

const [first_name, last_name, email, message] = contactForm

export const contactDefaultValues = {
  [first_name.name]: '',
  [last_name.name]: '',
  [email.name]: '',
  [message.name]: ''
}
