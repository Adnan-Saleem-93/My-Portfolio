'use client'
import {motion} from 'framer-motion'
import Project from './Project'
import ImmentiaLogo from '../../public/images/immentia-logo.png'

const projects = [
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  },
  {
    title: 'Project',
    description: 'This is a test project description',
    imgSrc: ImmentiaLogo,
    link: '',
    repo: ''
  }
]

const Projects = () => {
  return (
    <section id="#projects" className="snap-center">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto px-2 md:px-10 justify-evenly items-center"
      >
        <h3 className="absolute top-24 text-2xl uppercase tracking-[12px] text-gray-400/80 mb-6">
          Projects
        </h3>

        <article className="relative top-8 w-full flex overflow-x-auto z-20 space-x-12">
          {projects.map((project, index) => {
            return <Project key={index} {...project} />
          })}
        </article>
        {/* <div className="w-full bg-[#286c2c6e] -skew-y-12 h-1/3 absolute left-0 top-[40%]" /> */}
      </motion.div>
    </section>
  )
}

export default Projects
