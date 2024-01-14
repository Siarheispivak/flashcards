import type { Meta, StoryObj } from '@storybook/react'

import defAva from '@/shared/assets/images/default-ava.jpg'

import { Avatar } from './'
const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: defAva,
  },
}
