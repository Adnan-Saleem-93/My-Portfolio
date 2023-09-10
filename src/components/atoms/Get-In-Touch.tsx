import Link from 'next/link'
import React from 'react'
import {SocialIcon} from 'react-social-icons'

const GetInTouch = () => {
  return (
    <>
      <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
      <Link href="#contact" className="text-gray-400 md:inline-flex hidden">
        Get In Touch!
      </Link>
    </>
  )
}

export default GetInTouch
