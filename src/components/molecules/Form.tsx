'use client'
import React, {ReactElement, useCallback} from 'react'
import {useForm, Controller} from 'react-hook-form'
import Input from '../atoms/Input'
import PrimaryButton from '../atoms/Button'
import {IFormArrayItem, IFormItem} from '@/utils/interfaces'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {InputTypes} from '@/utils/constants'
import TextArea from '../atoms/TextArea'

type Props = {defaultValues: any; validations: any; form: any; onSubmit: any}

const Form = ({defaultValues, validations, form, onSubmit}: Props): ReactElement => {
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

  const renderFields = useCallback(() => {
    let inputFields: IFormArrayItem[] = []

    for (let item in form) {
      let {name, type, placeholder, label}: IFormItem = form[item]
      let error: string | null = errors[name]?.message?.toString() || null
      let value: any = defaultValues[name]

      inputFields.push({name, type, placeholder, label, error, value})
    }
    return inputFields.map((formItem: IFormArrayItem, index: number) => {
      const {name, type, error, value, placeholder} = formItem
      const colSpan: string = ['name', 'email'].includes(name) ? 'col-span-1' : 'col-span-2'
      return (
        <div key={index} className={`${colSpan} relative mb-1`}>
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
          {error && <span className={`text-yellow-200 text-sm animate-pulse`}>{error}</span>}
        </div>
      )
    })
  }, [form, defaultValues, errors, control])

  return (
    <form
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-full grid grid-cols-2 xs:grid-cols-1">{renderFields()}</div>
      <PrimaryButton text="Submit" type="submit" customClasses="w-full" />
    </form>
  )
}

export default Form
