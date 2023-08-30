import Skill from '../molecules/Skill'
import SectionTemplate from '../templates/Section-Template'

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
    <SectionTemplate
      classes="h-screen flex flex-col justify-center relative text-center mx-auto max-w-[90vw] md:px-10 items-center"
      sectionHeaderText="Skill"
    >
      <h3 className="absolute top-36 text-[11px] capitalize tracking-[3px] text-gray-400/80">
        Hover over a skill for skill proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 relative top-8">
        {skills.map((skill, index) => {
          return <Skill key={index} {...skill} />
        })}
      </div>
    </SectionTemplate>
  )
}

export default Skills
