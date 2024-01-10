import {dataset, projectId} from '../../sanity/env'
import {SANITY_IMAGE_CDN} from './constants'

export const generalImageURL = (image?: any) => {
  let imgId: string = image?.asset?._ref?.replace('image-', '')
  imgId = imgId.includes('-png')
    ? imgId.replace('-png', '.png')
    : imgId.includes('-jpg')
    ? imgId.replace('-jpg', '.jpg')
    : imgId.includes('-jpeg')
    ? imgId.replace('-jpeg', '.jpeg')
    : imgId
  return `${SANITY_IMAGE_CDN}${projectId}/${dataset}/${imgId}`
}
