import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth/ui/sing-in-form/sign-in-form'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/Sign In',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
