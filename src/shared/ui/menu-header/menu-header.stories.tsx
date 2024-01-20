import type { Meta, StoryObj } from '@storybook/react'

import { MenuHeader } from './'

const meta = {
  component: MenuHeader,
  tags: ['autodocs'],
  title: 'Components/UI/MenuHeader',
} satisfies Meta<typeof MenuHeader>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    email: 'lsdldslfdlsfsf@',
    name: 'sdfsdfs',
  },
}
