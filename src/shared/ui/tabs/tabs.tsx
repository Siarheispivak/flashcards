import { FC, ReactNode } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}

type CommonProps = {
  /** Use TabsContent components as children. */
  children?: ReactNode
  /** The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs. */
  defaultValue?: string
  /** Event handler called when the value changes.  */
  onValueChange?: (value: string) => void
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   * */
  tabs: TabType[]
  /** The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
}

type ConditionalProps = { fullWidth?: boolean }

export type TabsProps = CommonProps & ConditionalProps

export const Tabs: FC<TabsProps> = ({
  children,
  defaultValue,
  fullWidth,
  onValueChange,
  tabs,
  value,
}) => {
  const classNames = {
    list: clsx(s.list),
    root: clsx(s.root),
    trigger: clsx(s.trigger, fullWidth && s.fullWidth),
  }

  return (
    <TabsRadixUI.Root
      className={classNames.root}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <TabsRadixUI.List className={classNames.list}>
        {tabs.map((el, index) => {
          return (
            <TabsRadixUI.Trigger
              className={classNames.trigger}
              disabled={el.disabled}
              key={index}
              value={el.value}
            >
              <Typography variant={'body1'}>{el.title}</Typography>
            </TabsRadixUI.Trigger>
          )
        })}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}
export type TabContentProps = {
  children: ReactNode
  /** A unique value that associates the trigger with a content. */
  value: string
}

export const TabContent: FC<TabContentProps> = ({ children, value }) => {
  return (
    <TabsRadixUI.Content className={s.content} value={value}>
      {children}
    </TabsRadixUI.Content>
  )
}
