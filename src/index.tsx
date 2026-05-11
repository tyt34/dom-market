import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { initApp } from '@app/init.tsx'

import './index.scss'
import 'uno.css'
import './shared/styles/text.scss'
import './shared/styles/colors.scss'
import './shared/styles/fonts.scss'

initApp()

createRoot(document.getElementById('root')!).render(<App />)
