import { createTheme } from '@mui/material'

export const THEME = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          backgroundColor: 'rgba(190, 175, 153, 1)',
          borderRadius: '2px',
          height: '43px',
          color: '#fff',
          '&:hover': {
            // backgroundColor: '#222',
          },
        },
      },
    },
  },
  palette: {
    text: {
      primary: '#000',
    },
  },
})
