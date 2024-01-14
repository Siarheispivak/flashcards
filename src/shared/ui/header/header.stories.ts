import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    isAuth: true,
  },
}

export const NotAuthorized: Story = {
  args: {
    isAuth: false,
  },
}
