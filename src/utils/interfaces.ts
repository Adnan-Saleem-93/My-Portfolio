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
  colSpan: string
}

export interface IFormArrayItem {
  name: string
  label?: string
  placeholder: string
  error: FormErrorType
  value: any
  type: InputTypeValues
  colSpan: string
}

export interface IContactForm {
  first_name: IFormItem
  last_name: IFormItem
  email: IFormItem
  message: IFormItem
}
