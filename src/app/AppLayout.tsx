import { Outlet } from 'react-router-dom'
import { THEME } from './theme'
import { ThemeProvider } from '@mui/material'

export const AppLayout = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Outlet />
    </ThemeProvider>
  )
}
