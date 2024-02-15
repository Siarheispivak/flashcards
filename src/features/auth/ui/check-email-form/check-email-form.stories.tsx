import { CheckEmailForm } from '@/features/auth/ui/check-email-form/check-email-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmailForm,
  tags: ['autodocs'],
  title: 'Auth/Check Email',
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'your email',
  },
}
