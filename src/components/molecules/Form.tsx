'use client'
import React from 'react'
import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import Input from '../atoms/Input'
import PrimaryButton from '../atoms/Button'
import {IFormArrayItem, IFormItem} from '@/utils/interfaces'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {InputTypes} from '@/utils/constants'
import TextArea from '../atoms/TextArea'
import {MdInfo} from 'react-icons/md'

type Props = {defaultValues: any; validations: any; form: any; onSubmit: any}

export default function Form({defaultValues, validations, form, onSubmit}: Props) {
  const {
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<yup.InferType<typeof validations>>({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(validations),
    reValidateMode: 'onChange'
  })

  const renderFields = () => {
    let inputFields: IFormArrayItem[] = []

    for (let item in form) {
      let {name, type, placeholder, label, colSpan}: IFormItem = form[item]
      let error = errors[name]
      let value = defaultValues[name]

      inputFields.push({name, type, placeholder, label, error, value, colSpan})
    }
    return inputFields.map((formItem: IFormArrayItem, index: number) => {
      const {name, type, error, value, placeholder, colSpan} = formItem
      return (
        <div key={index} className={`${colSpan}`}>
          <Controller
            control={control}
            defaultValue={value}
            name={name}
            render={({field}) => {
              return type === InputTypes.TEXT ? (
                <Input
                  type={type}
                  id={name}
                  placeholder={placeholder}
                  error={error ? true : false}
                  errorMessage={error}
                  {...field}
                />
              ) : type === InputTypes.TEXTAREA ? (
                <TextArea
                  type={type}
                  id={name}
                  placeholder={placeholder}
                  error={error ? true : false}
                  errorMessage={error}
                  {...field}
                />
              ) : (
                <></>
              )
            }}
          />
          {/* {error && (
            <MdInfo className={`h-6 w-6 text-yellow-200 absolute right-1 top-2 animate-pulse`} />
          )} */}
        </div>
      )
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
      <div className="w-full grid grid-cols-2 gap-2 xs:grid-cols-1">{renderFields()}</div>
      <PrimaryButton text="Submit" type="submit" customClasses="w-full" />
    </form>
  )
}
