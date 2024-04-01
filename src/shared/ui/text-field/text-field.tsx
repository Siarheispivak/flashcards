import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { CloseIcon, Eye, VisibilityOff } from '@/shared/assets/icons'
import Search from '@/shared/assets/icons/search'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

import { Typography } from '../typography'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      labelProps,
      onChange,
      onClearInput,
      onValueChange,
      placeholder,
      type,
      value,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordButtonShown = type === 'password'

    const finalType = getFinalType(type, showPassword)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const classNames = {
      error: clsx(s.error),
      field: clsx(s.field, !!errorMessage && s.error, className),
      inputContainer: clsx(s.inputContainer, !!errorMessage && s.error),
      label: clsx(s.label, labelProps?.className),
      root: clsx(s.root, containerProps?.className),
    }
    const clearInputHandler = () => {
      onValueChange?.('')
      onClearInput?.()
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.inputContainer}>
          {type === 'search' && <Search />}
          <div className={s.inputWrapper}>
            <input
              className={classNames.field}
              onChange={handleChange}
              placeholder={placeholder}
              ref={ref}
              type={finalType}
              {...restProps}
            />
          </div>

          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          {type === 'search' && value && (
            <button className={s.rightIcon} onClick={clearInputHandler} type={'button'}>
              <CloseIcon className={s.closeOutlineIcon} />
            </button>
          )}
        </div>

        <Typography className={classNames.error} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
