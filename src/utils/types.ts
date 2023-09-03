import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form/dist/types'

export type FormErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined

export type InputTypeValues = 'text' | 'textarea' | 'number'
