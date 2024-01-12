import {InputFieldProps} from '@/utils/types'
import React from 'react'

function TextArea(props: InputFieldProps, ref: any) {
  return (
    <textarea rows={5} ref={ref} {...props} className={`input--field ${props.customClasses}`} />
  )
}

export default React.forwardRef(TextArea)
