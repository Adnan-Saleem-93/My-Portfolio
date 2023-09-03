import {FormErrorType} from '@/utils/types'
import React from 'react'

type Props = {
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

export default function TextArea(props: Props) {
  return (
    <textarea
      rows={5}
      {...props}
      className={`bg-slate-600 w-full rounded-md focus:outline-none p-2 ${props.customClasses}`}
    />
  )
}
