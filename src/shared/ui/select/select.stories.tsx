import { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

export type Options = {
  disabled?: boolean
  label: string
  value: string
}
const meta = {
  argTypes: {
    onValueChange: { action: 'select changes' },
    selectOptions: [],
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'box1', value: 'Select-box 1' },
  { label: 'box2', value: 'Select-box 2' },
  { label: 'box3', value: 'Select-box 3' },
]

export const SelectStory: Story = {
  args: {
    defaultValue: 'box1',
    label: 'Select-box',
    placeholder: 'Select-box 1',
    selectOptions: options,
  },
}

export const SelectStoryWithDisabledItem: Story = {
  args: {
    placeholder: 'choose',
    selectOptions: [
      { label: 'box1', value: 'Select-box 1' },
      { label: 'box2', value: 'Select-box 2' },
      { label: 'box3', value: 'Select-box 3' },
      { disabled: true, label: 'box4', value: 'Select-box 4' },
    ],
  },
}
export const DisabledSelect: Story = {
  args: {
    defaultValue: 'Select-box 1',
    disabled: true,
    label: 'Select-box',
    placeholder: 'Select-box 1',
    selectOptions: options,
  },
}
export const SelectStoryDefaultValue: Story = {
  args: {
    defaultValue: 'box1',
    label: 'Select-box',
    selectOptions: options,
  },
}
