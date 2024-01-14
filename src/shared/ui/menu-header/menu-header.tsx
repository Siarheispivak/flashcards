import { ProfileIcon, SignOutIcon } from '@/shared/assets'
import { Avatar } from '@/shared/ui/avatar'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/shared/ui/drop-down'
import { Typography } from '@/shared/ui/typography'

import s from './menu-header.module.scss'

type Props = {
  email: string
  name: string
  src?: string
}
export const MenuHeader = ({ email, name, src }: Props) => {
  //хук logout

  const trigger = (
    <button className={s.trigger}>
      <Avatar src={src} />
    </button>
  )

  return (
    <Dropdown trigger={trigger}>
      <DropdownItem className={s.itemInformation}>
        <Avatar src={src} />
        <div>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography variant={'caption'}>{email}</Typography>
        </div>
      </DropdownItem>
      <DropdownItemWithIcon icon={<ProfileIcon />} text={'My profile'} />
      <DropdownItemWithIcon icon={<SignOutIcon />} text={'Sign Out'} />
    </Dropdown>
  )
}
