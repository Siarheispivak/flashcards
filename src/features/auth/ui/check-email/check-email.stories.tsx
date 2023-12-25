import {Meta, StoryObj} from "@storybook/react";
import {Story} from "@storybook/blocks";
import {CheckEmail} from "@/features/auth/ui/check-email/check-email.tsx";


const meta = {
    title:'Auth/Check Email',
    component:CheckEmail,
    tags:['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        email:'your email'
    }
}