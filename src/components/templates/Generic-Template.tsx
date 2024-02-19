import React from 'react'

type Props = {classes: string; children: any}

export default function GenericTemplate({children, classes}: Props) {
  return <article className={classes}>{children}</article>
}
