import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateLayout, PublicLayout } from '@/app/routes/layouts'
import { CommonLayout } from '@/app/routes/layouts/common-layout'
import { privateRoutes } from '@/app/routes/private-routes'
import { publicRoutes } from '@/app/routes/public-routes'

const router = createBrowserRouter([
  {
    children: [
      { children: privateRoutes, element: <PrivateLayout /> },
      { children: publicRoutes, element: <PublicLayout /> },
    ],
    element: <CommonLayout />,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
