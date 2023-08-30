import React from 'react'

type Props = {text: string}

export default function SectionHeader({text}: Props) {
  return (
    <h3 className="absolute top-20 text-2xl uppercase tracking-[12px] text-gray-400/80">{text}</h3>
  )
}
