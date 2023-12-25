import type {Meta, StoryObj} from '@storybook/react'
import {RecoveryPassword} from "@/components/ui/auth/ui/recover-password/recover-password.tsx";

const meta = {
    title: 'Auth/Recovery password',
    component: RecoveryPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof RecoveryPassword>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        onSubmit: () => {},
    },
}