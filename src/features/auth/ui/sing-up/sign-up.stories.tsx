import type { Meta, StoryObj } from '@storybook/react'
import {SignUp} from "@/features/auth/ui/sing-up/sign-up.tsx";


const meta = {
    title: 'Auth/Sign Up',
    component: SignUp,
    tags: ['autodocs'],
} satisfies Meta<typeof SignUp>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        onSubmit: () => {},
    },
}