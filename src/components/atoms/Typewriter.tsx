'use client'

import React from 'react'
import {
  Cursor,
  useTypewriter,
  TypewriterHelper,
} from 'react-simple-typewriter'

type Props = {}

export default function Typewriter({}: Props) {
  const [text, count]: [text: string, count: TypewriterHelper] = useTypewriter({
    words: ['a ReactJS Developer', 'an ASP.NET Developer', 'a MERN Developer'],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 100,
  })
  return (
    <h1 className="text-4xl py-2">
      I&apos;m <span className="text-green-400">{text}</span>
      <Cursor cursorColor="#ffff00" />
    </h1>
  )
}
