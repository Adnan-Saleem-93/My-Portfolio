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
      className="flex flex-col hover:ring-1 mb-4 hover:ring-sky-500 cursor-pointer hover:px-1 sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-secondary"
    >
      <h3 className="text-xl flex items-center gap-x-3 font-semibold text-white">
        {companyName}
        {isPresentCompany && (
          <span className="inline ">
            <MdCheckCircle
              className="h-[18px] w-[18px] animate-pulse"
              color="skyblue"
            />
          </span>
        )}
      </h3>
      <time className="text-xs uppercase text-gray-400">{period}</time>

      <h4 className="text-lg font-bold text-blue-100">{jobTitle}</h4>
      {open && (
        <div className="overflow-auto py-3 m-0 ">
          <ul className="list-none space-y-1 px-3">
            {points.map((detail: string, index: number): ReactNode => {
              return (
                <li
                  key={index}
                  className="text-[12px] p-0 flex gap-2 items-center"
                >
                  <span className="w-[1rem]">
                    <FiArrowUpRight color="purple" height={15} width={15} />
                  </span>
                  <span className="text-justify text-gray-200">{detail}</span>
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
