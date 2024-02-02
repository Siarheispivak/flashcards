import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/features/auth/ui/sing-up/sign-up-form.tsx'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/Sign Up',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}
