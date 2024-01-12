import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form/dist/types'

export type FormErrorType = FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined | null

export type InputTypeValues = 'text' | 'textarea' | 'number'

export type InputFieldProps = {
  value: string
  type: string
  id: string
  name: string
  onChange: any
  placeholder: string
  customClasses?: string
}
