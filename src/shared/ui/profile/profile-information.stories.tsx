import type {Meta, StoryObj} from '@storybook/react'

import {ProfileInformation} from "@/shared/ui/profile/profile-information.tsx";

const meta = {
    component: ProfileInformation,
    tags: ['autodocs'],
    title: 'Components/UI/ProfileInformation',
} satisfies Meta<typeof ProfileInformation>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        email: 'your_email@domain.com',
        avatar: 'url',
        value: 'John Doe',
        onLogout: () => {
            console.info('logout')
        },
        onAvatarChange: (newAvatar: string) => {
            console.info(newAvatar)
        },
        onNameChange: (newValue: string) => {
            console.info(newValue)
        }
    },
}
