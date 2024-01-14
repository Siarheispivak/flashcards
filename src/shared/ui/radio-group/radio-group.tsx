import { FC } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

export type RadioItem = {
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  name?: string
  onChange: (value: string) => void
  options: RadioItem[]
  required?: boolean
  value: string
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const { className, disabled, errorMessage, onChange, options, value, ...rest } = props

  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <RadioGroupRadix.Root
      className={classNames.root}
      disabled={disabled}
      onValueChange={onChange}
      value={value}
      {...rest}
    >
      {options.map((e, i) => (
        <div className={s.container} key={i}>
          <RadioGroupRadix.Item className={s.item} value={e.value}>
            <RadioGroupRadix.Indicator className={s.indicator} />
          </RadioGroupRadix.Item>
          <label className={s.label}>{e.label}</label>
        </div>
      ))}
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </RadioGroupRadix.Root>
  )
}
