import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { NavigationPage } from '@pages/Navigation'
import { ROUTES } from './router.constants'
import { ApartmentsPage } from '@pages/Apartments'
import { ApartmentsIdPage } from '@pages/ApartmentsIdPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <NavigationPage />,
      },
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
])
