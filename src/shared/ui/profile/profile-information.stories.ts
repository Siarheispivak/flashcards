import type { Meta, StoryObj } from '@storybook/react'

import { ProfileInformation } from '@/shared/ui/profile/profile-information'

const meta = {
  component: ProfileInformation,
  tags: ['autodocs'],
  title: 'Components/UI/ProfileInformation',
} satisfies Meta<typeof ProfileInformation>

export default meta
type Story = StoryObj<typeof meta>

export const EmptyAvatar: Story = {
  args: {
    avatar: 'url',
    email: 'your_email@domain.com',
    name: 'John Doe',
  },
}
export const NormalAvatar: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/siarheispivak?v=4',
    email: 'sspivka@gmail.com',
    name: 'Peter Parker',
  },
}
export const BrokenAvatar: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/siarheispivak?v=4',
    email: 'sspivka@gmail.com',
    name: 'Peter Parker',
  },
}
