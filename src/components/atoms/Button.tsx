import React from 'react'

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  text: string
  customClasses?: string
  onClick?: any
}

export default function PrimaryButton({
  text,
  type = 'button',
  customClasses = '',
  onClick = null
}: Props) {
  return (
    <button
      className={`${customClasses} p-2 bg-sky-700 rounded-md hover:bg-sky-800 tracking-[8px] hover:tracking-[11px] uppercase`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}
