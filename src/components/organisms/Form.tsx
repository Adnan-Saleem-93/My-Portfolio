'use client'
import React from 'react'
import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import {IFormItem} from '@/utils/interfaces'

type Inputs = {
  name: string
  label?: string
  placeholder: string
  errorMessage: string
  type: string
  invalidMessage?: string
  rowWidth: number
}

type Props = {defaultValues?: any; validations?: any; form?: any; onSubmit?: any}

export default function Form({defaultValues, validations, form, onSubmit}: Props) {
  const {
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<Inputs>({defaultValues, reValidateMode: 'onSubmit'})

  const render = () => {
    return form.map((formItem: IFormItem, index: number) => {
      const {name, type, errorMessage, placeholder} = formItem
      return (
        <div key={index}>
          <Controller
            control={control}
            // defaultValue={value}
            // name={name}
            render={({field}) => {
              return type === 'text' ? (
                <Input
                  type={type}
                  id={name}
                  placeholder={placeholder}
                  error={false}
                  errorMessage={errorMessage}
                  {...field}
                />
              ) : null
            }}
          />
        </div>
      )
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button text="Submit" type="submit" />
    </form>
  )
}
