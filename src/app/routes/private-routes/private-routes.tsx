import { RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages/decks-pages/decks-page'
import { routes } from '@/shared/const'

export const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
  {
    element: <h1>Cards Page</h1>,
    path: routes.CARDS,
  },
  {
    element: <h1>Learn Page</h1>,
    path: routes.LEARN,
  },
  // {
  //   path: routes.PROFILE,
  //   element: <PersonalInformation email={'Шкутник на приеме'} logOut={() => {}} />,
  // },
]
