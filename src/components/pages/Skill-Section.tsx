import {getSkills} from '@/utils/apis'
import {client} from '../../../sanity/lib/client'
import Skill from '../molecules/Skill'
import SectionTemplate from '../templates/Section-Template'

const Skills = async () => {
  const skills = await getSkills()
  return (
    <SectionTemplate
      classes="h-screen flex flex-col justify-start relative text-center mx-auto max-w-[90vw] md:px-10 items-center px-3 py-6 gap-y-12"
      sectionHeaderText="Skills"
    >
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-sm text-gray-500 tracking-widest">
          Hover over the skills for proficiency
        </p>
        <div className="grid grid-cols-4 gap-5">
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
      </div>
    </SectionTemplate>
  )
}

export default Skills
