import { router } from './router'
import { RouterProvider } from 'react-router-dom'

// import '../shared/styles/text.scss'

export const App = () => {
  return <RouterProvider router={router} />
}

export default App
