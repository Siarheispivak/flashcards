import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps =  ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<ElementRef<'div'>, CardProps>(({ className, ...restProps }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  // сделать полиморфной

  return <div ref={ref} className={classNames.root} {...restProps}></div>
})
