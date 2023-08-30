import React from 'react'

type Props = {href?: string; name: string}

export default function ProjectActionButton({href, name}: Props) {
  return (
    <a className="project--card--btn" href={href} target="_blank">
      {name}
    </a>
  )
}
