import {format} from 'date-fns'
import {generalImageURL} from '@/utils/helper-methods'
import {getExperience} from '@/utils/apis'
import SectionTemplate from '@/components/templates/Section-Template'
import ExperienceCard from '@/components/molecules/Experience-Card'

const ExperiencePage = async () => {
  const experience: any[] = await getExperience()

  return (
    <SectionTemplate
      classes="h-screen flex flex-col text-center md:text-left mx-auto max-w-[95%] md:max-w-full px-3 py-6 md:px-10 justify-center items-center gap-y-8"
      sectionHeaderText="Experience"
    >
      <div className="h-4/5 flex xl:justify-center space-x-5 md:space-x-10 items-center w-full max-w-full overflow-x-auto snap-x snap-mandatory">
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

export default ExperiencePage
