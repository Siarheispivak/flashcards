import { Outlet } from 'react-router-dom'

import { Header } from '@/shared/ui/header'

export const CommonLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
