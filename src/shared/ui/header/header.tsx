import LogoIncubator from '@/shared/assets/icons/logo-incubator'
import { useAuthMeQuery } from '@/shared/services/auth-api'
import { Button } from '@/shared/ui/button'
import { MenuHeader } from '@/shared/ui/menu-header'

import s from './header.module.scss'

export const Header = () => {
  const { data, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <header className={s.header}>
      <LogoIncubator />
      {data && <MenuHeader email={data.email} name={data.name} />}
      {!data && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}
