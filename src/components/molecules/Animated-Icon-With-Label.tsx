import React from 'react'
import AnimatedIcon from '../atoms/Animated-Icon'

type Props = {icon: any; label: string; index: number}

export default function AnimatedIconWithLabel({icon, label, index}: Props) {
  return (
    <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center mb-4`}>
      <AnimatedIcon icon={icon} />
      <p className={`text-gray-300 tracking-wider ${index % 2 === 0 ? 'mr-3' : 'ml-3'}`}>{label}</p>
    </div>
  )
}
