import {StaticImageData} from 'next/image'

export interface IGithubRepo {
  id: number
  name: string
  html_url: string
  homepage: string
}

export interface ITechnology {
  id?: string
  name: string
  img: StaticImageData
}

export interface ILinkItem {
  name: string
  href?: string
}

export interface IAnimatedIconLabel {
  icon: any
  label: string
}

export interface IFormItem {
  name: string
  label?: string
  placeholder: string
  errorMessage?: string
  type: string
  invalidMessage?: string
  rowWidth: number
}
