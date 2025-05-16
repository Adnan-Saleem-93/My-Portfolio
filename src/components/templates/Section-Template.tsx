import React from 'react'
import SectionHeader from '../atoms/Section-Header'

type Props = {
  children: any
  classes: string
  sectionHeaderText: string
  sectionHeaderClasses?: string
}

export default function SectionTemplate({
  children,
  classes,
  sectionHeaderText,
  sectionHeaderClasses = '',
}: Props) {
  return (
    <article className={`py-12 ${classes}`}>
      <SectionHeader text={sectionHeaderText} classes={sectionHeaderClasses} />
      {children}
    </article>
  )
}
