'use client'

import React from 'react'
import {motion} from 'framer-motion'
import SectionHeader from '../atoms/Section-Header'

type Props = {children: any; classes: string; sectionHeaderText: string}

export default function SectionTemplate({children, classes, sectionHeaderText}: Props) {
  return (
    <motion.article
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className={classes}
    >
      <SectionHeader text={sectionHeaderText} />
      {children}
    </motion.article>
  )
}
