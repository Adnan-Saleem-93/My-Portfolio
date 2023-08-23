'use client'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ImmentiaLogo from '../../public/images/immentia-logo.png'
import IntelligenesLogo from '../../public/images/intelligenes-logo.png'

const Experience = () => {
  return (
    <section id="#experience" className="snap-center">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="h-screen flex flex-col relative text-center md:text-left mx-auto max-w-7xl px-3 md:px-10 justify-start items-center"
      >
        <h3 className="relative top-20 text-2xl uppercase tracking-[12px] text-gray-400/80">
          Experience
        </h3>

        <div className="relative top-24 flex space-x-5 md:space-x-10 items-center w-full max-w-full overflow-x-auto snap-x snap-mandatory">
          <ExperienceCard
            imgSrc={IntelligenesLogo}
            alt="intelligenes"
            position="Senior React Developer"
            name="Intelligenes - Global Software Delivery"
            period="Apr 04, 2022 - Aug 25, 2023"
            details={[
              'Joined as Frontend (ReactJS) Developer.',
              'Currently working on a large-scale project (Rungjumper) for a client in the US.',
              'Served as Team Lead for RungJumper project and also developed most of the frontend for it.',
              'Supervised junior React developers on other projects as well.',
              'Converted Figma Design to React Components.',
              "Customized Material UI theming to customer's satisfaction.",
              'Used CI/CD and Agile Methodlogies in Azure DevOps.'
            ]}
            webLink="https://www.intelligenes.com/"
          />
          <ExperienceCard
            imgSrc={ImmentiaLogo}
            alt="immentia"
            name="Immentia SMC Pvt. Ltd."
            position="Senior Team Lead"
            period="Nov 26, 2019 - Mar 26, 2022"
            details={[
              'Joined as ASP.NET intern.',
              'Worked with multiple technologies and frameworks including ASP.NET/Core, MERN Stack, MS SQL Server.',
              'Supervised a small team of interns and junior developers for 9 months.',
              'Worked in close collaboration with the CEO of the company to optimize and add features to the major projects.',
              'Worked on major projects of the company, frequently adding new features and optimizing the existing ones such as Academic Solutions, Sales Management, FikiFoo, Design Solutions.'
            ]}
            webLink="https://immentia.com/"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
