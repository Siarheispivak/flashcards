import { Outlet } from 'react-router-dom'

import s from './public-layout.module.scss'
export const PublicLayout = () => {
  return (
    <div className={s.container}>
      <Outlet />
    </div>
  )
}
