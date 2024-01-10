import ExperienceCard from '../molecules/Experience-Card'
import SectionTemplate from '../templates/Section-Template'
import {client} from '../../../sanity/lib/client'
import {format} from 'date-fns'
import {generalImageURL} from '@/utils/helper-methods'

export async function getExperience() {
  const experience = await client.fetch('*[_type == "experience"]')
  return experience
}

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <SectionTemplate
      classes="h-screen flex flex-col relative text-center md:text-left mx-auto max-w-7xl px-3 md:px-10 justify-start items-center"
      sectionHeaderText="Experience"
    >
      <div className="relative top-36 flex space-x-5 md:space-x-10 items-center w-full max-w-full overflow-x-auto snap-x snap-mandatory">
        {experience.map((exp, index) => {
          const {companyImage, startDate, endDate, companyName, jobTitle, points, webLink} = exp
          const imgSrc: string = generalImageURL(companyImage)
          return (
            <ExperienceCard
              key={index}
              imgSrc={imgSrc}
              alt={companyImage.alt}
              position={jobTitle}
              name={companyName}
              period={`${startDate ? format(startDate, 'MMM d, y') : ''} - ${
                endDate ? format(endDate, 'MMM d, y') : 'Present'
              }`}
              details={points}
              webLink={webLink}
            />
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default Experience
