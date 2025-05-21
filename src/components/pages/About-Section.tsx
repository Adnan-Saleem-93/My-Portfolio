import SectionTemplate from '../templates/Section-Template'
import { differenceInYears } from 'date-fns'

const About = () => {
  // Define the start date
  const startDate = new Date(2019, 10, 26) // Note: JavaScript months are  0-indexed, so 10 represents Novemeber

  // Get the current date
  const currentDate = new Date()

  // Calculate the difference in years
  const yearsPassed = differenceInYears(currentDate, startDate)

  const points = [
    <>
      Full Stack Web Developer with over{' '}
      <span className="border-b border-b-white">{yearsPassed} years</span> of
      industry experience.
    </>,
    `Passionate about using technologies like JavaScript, ReactJS, NextJS,
          MERN Stack, ASP.NET & SQL Server for building web
          apps.`,
    `Well-experienced in Full-stack Web Development, capable of working on
          both Frontend, Backend Applications, Chrome Extensions and Databases.`,
    `Full Stack Web Developer by day, Freelancer by night.`,
  ]

  return (
    <SectionTemplate sectionHeaderText="about">
      <div className="flex flex-col justify-center gap-y-4">
        {points.map((point, index) => {
          return (
            <div key={index} className="flex">
              <p className="text-gray-400 inline tracking-widest leading-6 text-[16px]">
                {point}
              </p>
            </div>
          )
        })}
      </div>
    </SectionTemplate>
  )
}

export default About
