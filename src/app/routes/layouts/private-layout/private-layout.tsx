import { Navigate, Outlet } from 'react-router-dom'

import { useAuthMeQuery } from '@/shared/services/auth-api'

export const PrivateLayout = () => {
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <div>...Loading</div>
  }

  return isError ? (
    <Navigate to={'/login'} />
  ) : (
    <div>
      <Outlet />
    </div>
  )
}
