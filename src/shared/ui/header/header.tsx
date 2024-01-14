import LogoIncubator from '@/shared/assets/icons/logo-incubator'
import { Button } from '@/shared/ui/button'
import { MenuHeader } from '@/shared/ui/menu-header'

import s from './header.module.scss'

export const Header = () => {
  const data = true

  return (
    <header className={s.header}>
      <LogoIncubator />
      {data && <MenuHeader email={'Siarheispivak@gmail.com'} name={'Siarhei'} />}
      {!data && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}
