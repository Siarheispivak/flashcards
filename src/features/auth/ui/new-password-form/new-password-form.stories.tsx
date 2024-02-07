import { NewPasswordForm } from '@/features/auth/ui/new-password-form/new-password-form'
import { Story } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/New Password',
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
