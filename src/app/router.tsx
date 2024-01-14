import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/pages/decks-pages/decks-pages'
import { Header } from '@/shared/ui/header'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Header />,
    path: '/header',
  },
  {
    element: <DecksPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
