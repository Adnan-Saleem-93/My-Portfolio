'use client'
import React from 'react'
import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import {IFormItem} from '@/utils/interfaces'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {defaultValues?: any; validations?: any; form?: any; onSubmit?: any}

export default function Form({defaultValues, validations, form, onSubmit}: Props) {
  type InputType = typeof validations

  const {
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<yup.InferType<typeof validations>>({
    defaultValues,
    resolver: yupResolver(validations),
    reValidateMode: 'onSubmit'
  })

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
