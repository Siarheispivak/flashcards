import { ComponentProps } from 'react'

import defAva from '@/shared/assets/images/default-ava.jpg'

import s from './avatar.module.scss'

export type AvatarProps = {
  name?: string
  size?: ComponentProps<'img'>['width']
  src?: ComponentProps<'img'>['src']
}
export const Avatar = ({ name, size = 36, src }: AvatarProps) => {
  return (
    <img
      alt={`${name}'avatar'`}
      className={s.avatar}
      height={size}
      src={src ?? defAva}
      width={size}
    />
  )
}
