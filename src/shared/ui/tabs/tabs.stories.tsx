import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, Tabs } from '@/shared/ui/tabs/tabs'

const meta = {
  args: {
    children: (
      <>
        <TabContent value={'Switcher1'}>Switcher1</TabContent>
        <TabContent value={'Switcher2'}>Switcher2</TabContent>
        <TabContent value={'Switcher3'}>Switcher3</TabContent>
        <TabContent value={'Switcher4'}>Switcher4</TabContent>
        <TabContent value={'Switcher5'}>Switcher5</TabContent>
      </>
    ),
    defaultValue: 'Switcher1',
    tabs: [
      { title: 'Switcher1', value: 'Switcher1' },
      { title: 'Switcher2', value: 'Switcher2' },
      { title: 'Switcher3', value: 'Switcher3' },
      { title: 'Switcher4', value: 'Switcher4' },
      { title: 'Switcher5', value: 'Switcher5' },
    ],
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/UI/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>
export const Primary = {}

export const PrimaryWithDisabled: Story = {
  args: {
    tabs: [
      { title: 'Switcher1', value: 'Switcher1' },
      { title: 'Switcher2', value: 'Switcher2' },
      { title: 'Switcher3', value: 'Switcher3' },
      { title: 'Switcher4', value: 'Switcher4' },
      { disabled: true, title: 'Switcher5', value: 'Switcher5' },
    ],
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}
