import React from 'react'

type Props = {icon: any}

export default function AnimatedIcon({icon: Icon}: Props) {
  return <Icon className="h-8 w-8 animate-pulse text-amber-500" />
}
