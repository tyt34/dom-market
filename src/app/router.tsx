import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { NavigationPage } from '@pages/Navigation'
import { ROUTES } from './router.constants'
import { ApartmentsPage } from '@pages/Apartments'
import { ApartmentsIdPage } from '@pages/ApartmentsIdPage'
import { ApartmentsLayout } from './layouts/ApartmentsLayout'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <NavigationPage />,
      },
      {
        element: <ApartmentsLayout />,
        children: [
          {
            path: ROUTES.APARTMENTS,
            element: <ApartmentsPage />,
          },
          {
            path: `${ROUTES.APARTMENTS}/:id`,
            element: <ApartmentsIdPage />,
          },
        ],
      },
    ],
  },
])
