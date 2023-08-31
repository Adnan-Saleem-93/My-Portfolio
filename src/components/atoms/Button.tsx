import React from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  text: string
  customClasses?: string
  onClick?: any
}

export default function Button({text, type = 'button', customClasses = '', onClick = null}: Props) {
  return (
    <button className={`${customClasses}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}
