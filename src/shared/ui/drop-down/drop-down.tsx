import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './drop-down.module.scss'

export type DropdownProps = {
  /** The preferred content alignment against the trigger. */
  align?: 'center' | 'end' | 'start'
  /** Use TooltipItem components as children.*/
  children: ReactNode
  className?: string
  style?: CSSProperties
  trigger?: ReactNode
}

export const Dropdown = ({ align = 'end', children, className, style, trigger }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    button: s.button,
    container: s.container,
    content: clsx(s.content, className),
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root onOpenChange={setOpen} open={open}>
      <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
      {open && (
        <DropdownMenuRadix.Portal forceMount>
          <DropdownMenuRadix.Content
            align={align}
            asChild
            className={classNames.content}
            forceMount
            onClick={event => event.stopPropagation()}
            sideOffset={4}
            style={style}
          >
            <div className={classNames.container}>
              <DropdownMenuRadix.Arrow className={classNames.arrowBox}>
                <div className={classNames.arrow} />
              </DropdownMenuRadix.Arrow>
              <div className={classNames.itemsBox}>{children}</div>
            </div>
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      )}
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect?: (event: Event) => void
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  disabled,
  onSelect,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemBox: s.itemBox,
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
    >
      <div>{children}</div>
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}) => {
  const classNames = {
    box: s.box,
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <div className={classNames.box}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant={'caption'}>{text}</Typography>
      </div>
    </DropdownMenuRadix.Item>
  )
}
