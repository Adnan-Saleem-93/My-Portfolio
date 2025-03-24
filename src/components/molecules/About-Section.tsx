import { differenceInYears, differenceInMonths } from 'date-fns'

const startDate = new Date(2019, 10, 26) // Note: JavaScript months are  0-indexed, so 10 represents Novemeber

// Get the current date
const currentDate = new Date()

// Calculate the difference in years
const yearsPassed = differenceInYears(currentDate, startDate)

// Calculate the difference in months
const monthsPassed = differenceInMonths(currentDate, startDate)

// Since we've already calculated the years, we subtract them from the total months
const remainingMonths = monthsPassed - yearsPassed * 12

const AboutSection = () => {
  return (
    <p className="inline md:tracking-wider md:leading-6 text-[13px] text-white">
      I&apos;m a Full Stack Web Developer having {yearsPassed} years{' '}
      {remainingMonths > 0
        ? `and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
        : ''}{' '}
      of experience in Web Development. I have experience in building
      Responsive, Performant and Scalable Web Apps and Chrome Extensions. I am
      well-experienced in Full-stack Web Development, capable of working on both
      Frontend and Backend Applications, as well as Databases.
    </p>
  )
}

export default AboutSection
