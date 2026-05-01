import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { NavigationPage } from '@pages/Navigation'
import { ROUTES } from './router.constants'
import { MapPage } from '@pages/Map'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <NavigationPage />,
      },
      {
        path: ROUTES.MAP,
        element: <MapPage />,
      },
    ],
  },
])
