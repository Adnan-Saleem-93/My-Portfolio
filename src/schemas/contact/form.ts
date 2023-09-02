import {IFormItem} from '@/utils/interfaces'

export const contactForm: IFormItem[] = [
  {
    name: 'first_name',
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter First Name Here',
    errorMessage: 'First Name is required.',
    rowWidth: 6
  },
  {
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter Last Name Here',
    errorMessage: 'Last Name is required.',
    rowWidth: 6
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    placeholder: 'Enter Email Address Here',
    errorMessage: 'Email Address is required.',
    invalidMessage: 'Please enter a valid Email Address',
    rowWidth: 12
  },
  {
    name: 'message',
    label: 'Message',
    type: 'text',
    placeholder: 'Enter Message Here',
    errorMessage: 'Message is required.',
    rowWidth: 12
  }
]
