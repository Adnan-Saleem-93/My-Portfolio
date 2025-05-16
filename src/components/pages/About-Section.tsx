import SectionTemplate from '../templates/Section-Template'
import { differenceInYears, differenceInMonths } from 'date-fns'

const About = () => {
  // Define the start date
  const startDate = new Date(2019, 10, 26) // Note: JavaScript months are  0-indexed, so 10 represents Novemeber

  // Get the current date
  const currentDate = new Date()

  // Calculate the difference in years
  const yearsPassed = differenceInYears(currentDate, startDate)

  // Calculate the difference in months
  const monthsPassed = differenceInMonths(currentDate, startDate)

  // Since we've already calculated the years, we subtract them from the total months
  const remainingMonths = monthsPassed - yearsPassed * 12

  return (
    <SectionTemplate
      classes="h-screen flex flex-col"
      sectionHeaderText="Full Stack Web Developer"
    >
      <div className="flex flex-col md:flex-row items-center justify-center h-5/6 gap-y-4">
        <div className="space-y-10 px-0 md:px-10 md:max-w-[60%] flex items-center">
          <p className="md:text-base inline md:tracking-widest md:leading-8 text-md xl:text-lg">
            Full Stack Web Developer with {yearsPassed} years{' '}
            {remainingMonths > 0
              ? `and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
              : ''}{' '}
            of industry experience.
          </p>
          <p className="md:text-base inline md:tracking-widest md:leading-8 text-md xl:text-lg">
            Full Stack Web Developer with {yearsPassed} years{' '}
            {remainingMonths > 0
              ? `and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
              : ''}{' '}
            of industry experience in Web Development. I love to work on web
            applications using technologies like JavaScript, ReactJS, NextJS,
            MERN Stack, C#, ASP.NET & MS SQL Server. I have experience in
            building Responsive and Scalable web apps and chrome extensions. I
            am well-experienced in Full-stack Web Development, capable of
            working on both Frontend and Backend Applications, as well as
            Databases.
          </p>
        </div>
      </div>
    </SectionTemplate>
  )
}

export default About
