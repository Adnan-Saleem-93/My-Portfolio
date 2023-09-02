import React from 'react'

type Props = {
  value: string
  type: string
  id: string
  name: string
  error: boolean
  errorMessage: string
  onChange: any
  placeholder: string
  customClasses?: string
}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className={`bg-slate-600 rounded-md focus:outline-none p-2 ${props.customClasses}`}
    />
  )
}
