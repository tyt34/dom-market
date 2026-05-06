import { THEME } from '@app/theme'
import { useMediaQuery } from '@mui/material'

export const useBreakpoints = () => {
  const isDesktop = useMediaQuery(THEME.breakpoints.up('xl'))

  return {
    isDesktop,
  }
}
