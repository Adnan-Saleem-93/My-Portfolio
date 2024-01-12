import {InputFieldProps} from '@/utils/types'
import React from 'react'

function Input(props: InputFieldProps, ref: any) {
  return <input {...props} ref={ref} className={`input--field ${props.customClasses}`} />
}

export default React.forwardRef(Input)
