import SectionTemplate from '../templates/Section-Template'
import {differenceInYears, differenceInMonths} from 'date-fns'
import AboutSectionImage from '../molecules/About-Section-Image'

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
      classes="h-screen flex flex-col md:flex-row relative text-center md:text-left mx-auto max-w-7xl md:px-10 justify-start items-center px-6 py-6"
      sectionHeaderText="About"
      sectionHeaderClasses="h-1/6"
    >
      <AboutSectionImage />
      <div className="space-y-10 px-0 md:px-10 md:max-w-[60%]">
        <p className="md:text-base inline md:tracking-widest md:leading-8 text-md xl:text-lg">
          I&apos;m a Full Stack Web Developer having {yearsPassed} years{' '}
          {remainingMonths > 0
            ? `and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
            : ''}{' '}
          of industry experience in Web Development. I love to work on web applications using
          technologies like JavaScript, ReactJS, NextJS, MERN Stack, C#, ASP.NET & MS SQL Server. I
          have experience in building Responsive and Scalable Web apps for in-house products and
          client projects. I am well-experienced in Full-stack Web Development, capable of working
          on both Frontend and Backend Applications, as well as Databases.
        </p>
      </div>
    </SectionTemplate>
  )
}

export default About
