import { getExperience } from '@/utils/apis'
import ExperienceAccordion from '../molecules/Experience Accordion'
import SectionTemplate from '../templates/Section-Template'
import { format } from 'date-fns'

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <SectionTemplate sectionHeaderText="experience">
      <div className="py-4 w-full">
        {experience.map((exp, index) => {
          const { startDate, endDate, companyName, jobTitle } = exp
          const formattedStartDate = startDate ? format(startDate, 'MMM y') : ''
          const formattedEndDate = endDate ? format(endDate, 'MMM y') : ''
          const period = `${formattedStartDate} - ${
            formattedEndDate ? formattedEndDate : 'Present'
          }`
          const isPresentCompany: boolean = period.includes('Present')

          return (
            <div
              key={`exp-${index + 1}`}
              className="gap-x-8 gap-y-4 text-gray-400 grid grid-cols-2 py-2"
            >
              <p>{isPresentCompany ? `Since ${formattedStartDate}` : period}</p>
              <div className="flex flex-col">
                <p className="text-slate-100">{companyName}</p>
                <p className="text-sm">{jobTitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default Experience
