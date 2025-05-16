import { getExperience } from '@/utils/apis'
import ExperienceAccordion from '../molecules/Experience Accordion'
import SectionTemplate from '../templates/Section-Template'
import { format } from 'date-fns'

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <SectionTemplate sectionHeaderText="experience">
      {experience.map((exp, index) => {
        const { startDate, endDate, companyName, jobTitle, points } = exp
        const formattedStartDate = startDate
          ? format(startDate, 'MMM d, y')
          : ''
        const formattedEndDate = endDate ? format(endDate, 'MMM d, y') : ''
        const period = `${formattedStartDate} - ${
          formattedEndDate ? formattedEndDate : 'Present'
        }`
        const isPresentCompany: boolean = period.includes('Present')
        console.log(exp)
        return (
          <div
            key={`exp-${index + 1}`}
            className="gap-x-8 text-gray-400 columns-3"
          >
            <p>{isPresentCompany ? `Since ${formattedStartDate}` : period}</p>
            <p className="text-slate-100">{companyName}</p>
            <p>{jobTitle}</p>
          </div>
        )
      })}
    </SectionTemplate>
  )
}

export default Experience
