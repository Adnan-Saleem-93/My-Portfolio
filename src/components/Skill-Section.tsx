'use client'
import {motion} from 'framer-motion'
import Skill from './Skill'

const skills = [
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''},
  {img: null, alt: ''}
]

const Skills = () => {
  return (
    <section id="#skills" className="snap-center">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="h-screen flex flex-col justify-center relative text-center mx-auto max-w-[90vw] md:px-10 items-center"
      >
        {/* <div className="h-full"> */}
        <h3 className="absolute top-24 text-2xl uppercase tracking-[12px] text-gray-400/80">
          Skill
        </h3>
        <h3 className="absolute top-36 text-sm capitalize tracking-[3px] text-gray-400/80">
          Hover over a skill for skill proficiency
        </h3>
        <div className="grid grid-cols-4 gap-5 relative top-8">
          {skills.map((skill, index) => {
            return (
              <Skill
                key={index}
                direction={index < skills.length / 2 ? 'left' : 'right'}
                {...skill}
              />
            )
          })}
        </div>
        {/* </div> */}
      </motion.div>
    </section>
  )
}

export default Skills
