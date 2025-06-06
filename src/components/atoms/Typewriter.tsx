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
    words: [
      'a ReactJS Developer',
      'a NextJS Developer',
      'a Chrome Extension Developer',
      'a MERN Developer',
      'an ASP.NET Developer',
    ],
    loop: true,
    delaySpeed: 3000,
    deleteSpeed: 100,
  })
  return (
    <h1 className="text-lg text-white font-light">
      I&apos;m <span className="text-orange-400 font-bold">{text}</span>
      <Cursor cursorColor="#ffff00" />
    </h1>
  )
}
