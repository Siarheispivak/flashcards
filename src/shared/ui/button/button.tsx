import { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export const ButtonVariant = ['link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: (typeof ButtonVariant)[number]
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const classNames = clsx(s.button, s[variant], className, fullWidth && s.fullWidth)

  return <Component className={classNames} {...rest} />
}
