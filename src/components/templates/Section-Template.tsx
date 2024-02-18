import React from 'react'
import SectionHeader from '../atoms/Section-Header'

type Props = {children: any; classes: string; sectionHeaderText: string}

export default function SectionTemplate({children, classes, sectionHeaderText}: Props) {
  return (
    <article className={classes}>
      <SectionHeader text={sectionHeaderText} />
      {children}
    </article>
  )
}
