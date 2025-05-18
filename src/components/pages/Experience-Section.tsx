import { getExperience } from '@/utils/apis'

import SectionTemplate from '../templates/Section-Template'
import { format } from 'date-fns'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <SectionTemplate sectionHeaderText="experience">
      <div className="w-full">
        {experience.map((exp, index) => {
          const { startDate, endDate, companyName, jobTitle, webLink } = exp
          const formattedStartDate = startDate ? format(startDate, 'MMM y') : ''
          const formattedEndDate = endDate ? format(endDate, 'MMM y') : ''
          const period = (
            <div className="flex items-center gap-x-2">
              {formattedStartDate} <MdOutlineArrowRightAlt />{' '}
              {formattedEndDate ? formattedEndDate : 'Present'}
            </div>
          )

          return (
            <div
              key={`exp-${index + 1}`}
              className="gap-x-8 gap-y-4 text-gray-400 grid grid-cols-2 py-2"
            >
              <div>
                {!formattedEndDate ? `Since ${formattedStartDate}` : period}
              </div>
              <div className="flex flex-col">
                <a
                  href={webLink}
                  target="_blank"
                  className="text-slate-100 hover:text-slate-300 cursor-pointer"
                >
                  {companyName}
                </a>
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
