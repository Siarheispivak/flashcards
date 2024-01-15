import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/pages/decks-pages/decks-pages'
import { Header } from '@/shared/ui/header'
import { TabContent, Tabs } from '@/shared/ui/tabs/tabs'

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
    element: (
      <Tabs
        defaultValue={'Switcher1'}
        fullWidth
        tabs={[
          { title: 'Switcher1', value: 'Switcher1' },
          { title: 'Switcher2', value: 'Switcher2' },
          { title: 'Switcher3', value: 'Switcher3' },
          { title: 'Switcher4', value: 'Switcher4' },
          { disabled: true, title: 'Switcher5', value: 'Switcher5' },
        ]}
      >
        <TabContent value={'Switcher1'}>Switcher1</TabContent>
        <TabContent value={'Switcher2'}>Switcher2</TabContent>
        <TabContent value={'Switcher3'}>Switcher3</TabContent>
        <TabContent value={'Switcher4'}>Switcher4</TabContent>
        <TabContent value={'Switcher5'}>Switcher5</TabContent>
      </Tabs>
    ),
    path: '/tabs',
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
