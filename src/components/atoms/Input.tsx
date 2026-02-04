import { cn } from '@/lib/utils'
import {InputFieldProps} from '@/utils/types'
import React from 'react'

function Input(props: InputFieldProps, ref: any) {
  return <input {...props} ref={ref} className={cn("input--field focus:ring-2 focus:ring-sky-300 !text-white", props.customClasses)} />
}

export default React.forwardRef(Input)
