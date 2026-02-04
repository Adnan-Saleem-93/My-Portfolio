import { cn } from '@/lib/utils'
import {InputFieldProps} from '@/utils/types'
import React from 'react'

function TextArea(props: InputFieldProps, ref: any) {
  return (
    <textarea rows={5} ref={ref} {...props} className={cn("input--field focus:ring-2 focus:ring-sky-300 !text-white", props.customClasses)}  />
  )
}

export default React.forwardRef(TextArea)
