import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/features/auth/ui/forgot-password-form/forgot-password-form'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/Recovery password',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
