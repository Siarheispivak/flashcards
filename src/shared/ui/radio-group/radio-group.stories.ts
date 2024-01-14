import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const meta = {
  argTypes: {
    onChange: { action: 'value changed to' },
    options: [],
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { label: 'React', value: 'react' },
  { label: 'Redux', value: 'redux' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
]

export const NotSelectedValue: Story = {
  args: {
    options: data,
    value: '',
  },
}

export const SelectedValue: Story = {
  args: {
    options: data,
    value: 'redux',
  },
}

export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'Some error message example',
    options: data,
    value: '',
  },
}
