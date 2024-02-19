import {ILinkItem} from '@/utils/interfaces'
import React from 'react'
import ProjectActionButton from '../atoms/Project-Action-Button'

type Props = {items: ILinkItem[]}

export default function ProjectActions({items}: Props) {
  return (
    <div className="flex justify-between w-full items-center">
      {items.map((item: ILinkItem, index: number) => {
        return <ProjectActionButton key={index} {...item} />
      })}
    </div>
  )
}
