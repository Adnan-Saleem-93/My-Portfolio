import ExperienceCard from '../molecules/Experience-Card'
import SectionTemplate from '../templates/Section-Template'
import { format } from 'date-fns'
import { generalImageURL } from '@/utils/helper-methods'
import { getExperience } from '@/utils/apis'
import { MdCheckCircle } from 'react-icons/md'

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <article className="h-screen dark:bg-gray-100 dark:text-gray-800">
      <div className="flex items-center justify-center h-full container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-3xl font-semibold">Experience</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              {experience.map((exp, index) => {
                const {
                  startDate,
                  endDate,
                  companyName,
                  jobTitle,
                  // points,
                } = exp

                const period = `${startDate ? format(startDate, 'MMM d, y') : ''} - ${
                  endDate ? format(endDate, 'MMM d, y') : 'Present'
                }`
                const isPresentCompany: boolean = period.includes('Present')

                return (
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                    <h3 className="text-xl flex items-center gap-x-3 font-semibold">
                      {companyName}
                      {isPresentCompany && (
                        <span className="inline ">
                          <MdCheckCircle
                            className="h-[18px] w-[18px]"
                            color="blue"
                          />
                        </span>
                      )}
                      <time className="text-xs uppercase dark:text-gray-500">
                        {period}
                      </time>
                    </h3>

                    <h4 className="text-lg font-bold text-blue-800">
                      {jobTitle}
                    </h4>
                    <p className="mt-3"></p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Experience
