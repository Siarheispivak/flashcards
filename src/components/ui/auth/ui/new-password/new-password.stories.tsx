import {NewPassword} from "@/components/ui/auth/ui/new-password/new-password.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {Story} from "@storybook/blocks";


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