import React from 'react'

type Props = {icon: any}

export default function AnimatedIcon({icon: Icon}: Props) {
  return <Icon className="h-8 w-8 animate-bounce text-amber-500" />
}
