import Image from 'next/image'
import me from '../assets/IMG_2561~2.JPG'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';

const HomePage = () => {
  return (
    <div
    id='home'
    className="h-screen w-full bg-cyan-950"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
          I&apos;m a Full Stack Web Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-md">
           I have more than 3 and a half years of experience in Web Development.
          I love to work on web application using technologies like
          <span className='font-bold'> React JS</span>,
          <span className='font-bold'>.NET</span>,
          <span className='font-bold'>MS SQL Server</span> & 
          <span className='font-bold'>MERN Stack</span>.
        </p>
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
      <div>
        <Image
          src={me}  
          alt="my profile"
          width="300"
          height="300"
          className="rounded-full mx-auto md:w-full"
        />
      </div>
    </div>
  </div>)
}

export default HomePage