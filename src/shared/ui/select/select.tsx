import { ReactNode } from 'react'

import { ArrowDownIcon } from '@/shared/assets'
import { Typography } from '@/shared/ui/typography'
import * as Label from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './selct.module.scss'

export type Options = {
  disabled?: boolean
  label: string
  value: string
}
type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: ReactNode
  selectOptions: Options[]
  value?: string
  variant?: 'default' | 'pagination'
}
export const Select = (props: SelectProps) => {
  console.log(props)
  const {
    className,
    defaultValue,
    disabled,
    label,
    onValueChange,
    placeholder,
    selectOptions,
    value,
  } = props

  return (
    <Label.Root style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        as={'label'}
        className={`${s.label} ${disabled && s.labelDisabled}`}
        variant={'body2'}
      >
        {label}
      </Typography>
      <RadixSelect.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required
        value={value}
      >
        <RadixSelect.Trigger className={clsx(s.trigger, className)}>
          <RadixSelect.Value placeholder={placeholder} />
          <ArrowDownIcon className={s.icon} />
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position={'popper'}>
            <RadixSelect.Viewport>
              {selectOptions.map(el => {
                return (
                  <RadixSelect.Item
                    className={s.item}
                    disabled={el.disabled}
                    key={el.value}
                    value={el.label}
                  >
                    <RadixSelect.ItemText asChild>
                      <Typography variant={'body1'}>{el.value}</Typography>
                    </RadixSelect.ItemText>
                  </RadixSelect.Item>
                )
              })}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </Label.Root>
  )
}
