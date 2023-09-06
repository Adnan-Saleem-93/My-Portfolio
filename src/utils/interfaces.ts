import {StaticImageData} from 'next/image'
import {FormErrorType, InputTypeValues} from './types'

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
  type: InputTypeValues
  invalidMessage?: string
}

export interface IFormArrayItem {
  name: string
  label?: string
  placeholder: string
  error: string | null
  value: any
  type: InputTypeValues
  rowWidth?: string
}

export interface IContactForm {
  name: IFormItem
  email: IFormItem
  subject: IFormItem
  message: IFormItem
}
