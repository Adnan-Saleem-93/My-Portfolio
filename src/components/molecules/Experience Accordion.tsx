'use client'

import { format } from 'date-fns'
import { ReactNode, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdCheckCircle } from 'react-icons/md'

const ExperienceAccordion = ({ exp }: { exp: any }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const { startDate, endDate, companyName, jobTitle, points } = exp
  const period = `${startDate ? format(startDate, 'MMM d, y') : ''} - ${
    endDate ? format(endDate, 'MMM d, y') : 'Present'
  }`
  const isPresentCompany: boolean = period.includes('Present')
  return (
    <div
      onClick={handleClick}
      className="flex flex-col hover:ring-1 mb-4 hover:ring-purple-950 hover:px-1 cursor-pointer hover:rounded-md sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
    >
      <h3 className="text-xl flex items-center gap-x-3 font-semibold">
        {companyName}
        {isPresentCompany && (
          <span className="inline ">
            <MdCheckCircle className="h-[18px] w-[18px]" color="blue" />
          </span>
        )}
        <time className="text-xs uppercase dark:text-gray-500">{period}</time>
      </h3>

      <h4 className="text-lg font-bold text-blue-800">{jobTitle}</h4>
      {open && (
        <div className="overflow-auto py-3 m-0 ">
          <ul className="list-none space-y-1 px-3">
            {points.map((detail: string, index: number): ReactNode => {
              return (
                <li
                  key={index}
                  className="text-gray-400 text-[12px] p-0 flex gap-2 items-center"
                >
                  <span className="w-[1rem]">
                    <FiArrowUpRight color="purple" height={15} width={15} />
                  </span>
                  <span className="text-justify text-gray-900">{detail}</span>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExperienceAccordion
