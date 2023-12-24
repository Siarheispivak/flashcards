import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/components/ui/auth/ui/sing-in'

const meta = {
    title: 'Auth/Sign In',
    component: SignIn,
    tags: ['autodocs'],
} satisfies Meta<typeof SignIn>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        onSubmit: () => {},
    },
}