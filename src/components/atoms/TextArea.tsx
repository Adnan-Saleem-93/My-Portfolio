import {InputFieldProps} from '@/utils/types'
import React from 'react'

export default function TextArea(props: InputFieldProps) {
  return <textarea rows={5} {...props} className={`input--field ${props.customClasses}`} />
}
