import type { Meta, StoryObj } from '@storybook/react'

import { RecoveryPassword } from '@/features/auth/ui/recover-password-form/recover-password-form'

const meta = {
  component: RecoveryPassword,
  tags: ['autodocs'],
  title: 'Auth/Recovery password',
} satisfies Meta<typeof RecoveryPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
