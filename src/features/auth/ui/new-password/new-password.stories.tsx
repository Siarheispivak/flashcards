import {Meta, StoryObj} from "@storybook/react";
import {Story} from "@storybook/blocks";
import {NewPassword} from "@/features/auth/ui/new-password/new-password.tsx";


const meta = {
    title:'Auth/New Password',
    component:NewPassword,
    tags:['autodocs'],
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        onSubmit:()=>{}
    }
}