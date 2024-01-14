import { EditIcon } from '@/shared/assets'
import { Button } from '@/shared/ui/button'
import { Dropdown, DropdownItemWithIcon } from '@/shared/ui/drop-down/drop-down'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Изменить'} />
        <DropdownItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Удалить'} />
        <DropdownItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Удалить'} />
        <DropdownItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Удалить'} />
        <DropdownItemWithIcon icon={<EditIcon />} onSelect={() => {}} text={'Удалить'} />
      </>
    ),
    trigger: <Button>open</Button>,
  },
}
