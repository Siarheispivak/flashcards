import type { Meta, StoryObj } from '@storybook/react'

import { RecoveryPasswordForm } from '@/features/auth/ui/recover-password-form/recover-password-form'

const meta = {
  component: RecoveryPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/Recovery password',
} satisfies Meta<typeof RecoveryPasswordForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
