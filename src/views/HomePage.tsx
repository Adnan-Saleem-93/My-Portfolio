"use client";

import Image from 'next/image'
import me from '../assets/my-pic.jpg'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';

const HomePage = () => {
  return (
    <div
    id='home'
    className="h-screen w-full bg-cyan-950"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-5xl text-white">
          Hi.
        </h2>
        <h2 className="text-3xl sm:text-5xl text-white">
          I&apos;m <span className='font-bold'>Adnan Saleem</span>.
        </h2>
        <h2 className="my-4 text-4xl sm:text-4xl font-bold text-white">
          Full Stack Web Developer
        </h2>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className='ml-4'>
        <Image
          src={me}  
          alt="my profile"
          width="275"
          height="275"
          className="rounded-full mx-auto md:w-full"
        />
      </div>
    </div>
  </div>)
}

export default HomePage