import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'

import './index.scss'
import 'uno.css'
import './shared/styles/text.scss'
import './shared/styles/colors.scss'

createRoot(document.getElementById('root')!).render(<App />)
