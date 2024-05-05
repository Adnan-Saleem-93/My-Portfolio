import React, {ReactNode} from 'react'
import Header from '../organisms/Header'
import SectionHeader from '../atoms/Section-Header'

type Props = {children: ReactNode; pageHeaderText: string; pageHeaderClasses?: string}

export default function PageTemplate({children, pageHeaderText, pageHeaderClasses = ''}: Props) {
  return (
    <div className="h-screen w-full">
      <Header pageHeaderText={pageHeaderText} pageHeaderClasses={pageHeaderClasses} />
      {children}
    </div>
  )
}
