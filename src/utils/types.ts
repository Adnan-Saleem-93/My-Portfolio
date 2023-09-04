import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form/dist/types'

export type FormErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined

export type InputTypeValues = 'text' | 'textarea' | 'number'

export type InputFieldProps = {
  value: string
  type: string
  id: string
  name: string
  error: boolean
  errorMessage: FormErrorType
  onChange: any
  placeholder: string
  customClasses?: string
}
