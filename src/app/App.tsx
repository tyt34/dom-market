import { router } from './router'
import { RouterProvider } from 'react-router-dom'

// import '../shared/styles/text.scss'
import 'uno.css'

export const App = () => {
  return <RouterProvider router={router} />
}

export default App
