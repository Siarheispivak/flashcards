import type { Meta, StoryObj } from '@storybook/react'

import { ProfileInformation } from '@/shared/ui/profile/profile-information'

const meta = {
  component: ProfileInformation,
  tags: ['autodocs'],
  title: 'Components/UI/ProfileInformation',
} satisfies Meta<typeof ProfileInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'url',
    email: 'your_email@domain.com',
    onAvatarChange: (newAvatar: string) => {
      console.info(newAvatar)
    },
    onLogout: () => {
      console.info('logout')
    },
    onNameChange: (newValue: string) => {
      console.info(newValue)
    },
    value: 'John Doe',
  },
}
