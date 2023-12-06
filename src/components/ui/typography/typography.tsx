import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'
export const TypographyVariant = [
  'large',
  'h1',
  'h2',
  'h3',
  'body1',
  'body2',
  'subtitle1',
  'subtitle2',
  'caption',
  'overline',
  'link1',
  'link2',
  'error',
] as const
export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: (typeof TypographyVariant)[number]
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props
  const classNames = clsx(s[variant], className)

  return (
    // <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    <Component className={classNames} {...rest} />
  )
}
