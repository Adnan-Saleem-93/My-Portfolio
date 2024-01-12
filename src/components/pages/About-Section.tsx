'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import myPic2 from '../../../public/images/my-pic-2.jpg'
import SectionTemplate from '../templates/Section-Template'

const About = () => {
  return (
    <SectionTemplate
      classes="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
      sectionHeaderText="About"
    >
      <Image
        src={myPic2}
        alt="about-section-pic"
        className="-mb-32 md:mb-0 flex-shrink-0 w-48 h-48 md:w-80 md:h-96 object-cover xl:w-[325px] xl:h-[425px] py-2 rounded-full lg:rounded-[1.5rem]"
      />
      <div className="space-y-10 px-0 md:px-10 md:max-w-[60%]">
        <p className="md:text-base inline md:tracking-widest md:leading-8 text-md xl:text-lg">
          I&apos;m a Full Stack Web Developer having more than 4 years of industry experience in Web
          Development. I love to work on web applications using technologies like JavaScript,
          ReactJS, NextJS, MERN Stack, C#, ASP.NET & MS SQL Server. I have experience in building
          Responsive and Scalable Web apps for in-house products and client projects. I am
          well-experienced in Full-stack Web Development, capable of working on both Frontend and
          Backend Applications, as well as Databases.
        </p>
      </div>
    </SectionTemplate>
  )
}

export default About
