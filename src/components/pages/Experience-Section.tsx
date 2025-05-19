import { getExperience } from '@/utils/apis'
import SectionTemplate from '../templates/Section-Template'
import { format } from 'date-fns'

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
            <div className="flex items-center gap-x-2 text-sm">
              {formattedStartDate} -{' '}
              {formattedEndDate ? formattedEndDate : 'Present'}
            </div>
          )

          return (
            <div
              key={`exp-${index + 1}`}
              className="gap-x-8 gap-y-4 text-gray-400 sm:grid sm:grid-cols-2 py-2"
            >
              <a
                href={webLink}
                target="_blank"
                className="text-slate-100 hover:text-slate-300 cursor-pointer"
              >
                {companyName}
              </a>

              <div className="flex flex-col text-sm">
                <p className="text-slate-300 sm:border-b sm:border-dashed border-slate-400 sm:pb-1 w-fit">
                  {jobTitle.join(' → ')}
                </p>
                <div
                  className={`pt-1 ${
                    index === experience.length - 1
                      ? ''
                      : 'border-b border-dashed border-slate-400 sm:pb-0 pb-1'
                  } sm:border-none`}
                >
                  {!formattedEndDate ? `Since ${formattedStartDate}` : period}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default Experience
