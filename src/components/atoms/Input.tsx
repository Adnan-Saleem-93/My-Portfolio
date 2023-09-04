import {InputFieldProps} from '@/utils/types'
import React from 'react'

export default function Input(props: InputFieldProps) {
  return <input {...props} className={`input--field ${props.customClasses}`} />
}
