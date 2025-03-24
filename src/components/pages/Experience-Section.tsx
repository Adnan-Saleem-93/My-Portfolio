import { getExperience } from '@/utils/apis'
import ExperienceAccordion from '../molecules/Experience Accordion'

const Experience = async () => {
  const experience: any[] = await getExperience()

  return (
    <article className="h-screen">
      <div className="flex items-center justify-center h-full container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
              <h3 className="text-3xl font-semibold text-white">Experience</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              {experience.map((exp, index) => {
                return (
                  <ExperienceAccordion
                    key={`exp-accordion-${index + 1}`}
                    exp={exp}
                  />
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
