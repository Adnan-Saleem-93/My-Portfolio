import React from 'react'
import {MdEmail} from 'react-icons/md'

const GetInTouch = () => {
  return (
    <span className="flex flex-row items-center justify-between gap-1 hover:scale-110">
      <MdEmail className="h-[24px] w-[24px]" color="gray" />

      <span className="text-gray-400 md:inline-flex hidden">Get In Touch!</span>
    </span>
  )
}

export default GetInTouch
