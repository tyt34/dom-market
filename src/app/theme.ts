import { createTheme } from '@mui/material'

export const THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1920,
    },
  },
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: 'rgba(190, 175, 153, 1)', // цвет при checked
          },
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
