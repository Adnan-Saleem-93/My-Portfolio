'use client'

import { useState } from 'react'

const Email = () => {
  const [isCopied, setIsCopied] = useState(false)
  const EMAIL = 'adnansaleem.dev@gmail.com'
  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 5000)
  }
  return (
    <span
      className="text-orange-300 tracking-wider ml-1 cursor-pointer hover:text-orange-400"
      onClick={copyToClipboard}
    >
      {isCopied ? 'Copied to clipboard' : EMAIL}
    </span>
  )
}

export default Email
