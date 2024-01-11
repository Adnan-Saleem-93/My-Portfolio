import {getSkills} from '@/utils/apis'
import {client} from '../../../sanity/lib/client'
import Skill from '../molecules/Skill'
import SectionTemplate from '../templates/Section-Template'

const Skills = async () => {
  const skills = await getSkills()
  return (
    <SectionTemplate
      classes="h-screen flex flex-col justify-center relative text-center mx-auto max-w-[90vw] md:px-10 items-center"
      sectionHeaderText="Skill"
    >
      <div className="grid grid-cols-4 gap-5 relative top-8">
        {skills.map((skill: any, index: number) => {
          return (
            <Skill
              key={index}
              alt={skill.alt}
              img={skill.skillImage}
              proficiency={skill.proficiency}
              title={skill.title}
            />
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default Skills
