import { RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages/decks-pages/decks-page'
import { ProfileInformationPage } from '@/pages/profile-information-page/profile-information-page'
import { routes } from '@/shared/const'

export const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    index: true,
  },
  {
    element: <h1>Cards Page</h1>,
    path: routes.CARDS,
  },
  {
    element: <h1>Learn Page</h1>,
    path: routes.LEARN,
  },
  {
    element: <ProfileInformationPage />,
    path: routes.PROFILE,
  },
]
