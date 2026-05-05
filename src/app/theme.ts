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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          // color: '#9e9e9e', // обычное состояние
          '&.Mui-checked': {
            color: 'rgba(190, 175, 153, 1)', // цвет при checked
          },
          '& .MuiSvgIcon-root': {
            // fontSize: 18, // дефолт ~24, уменьшаем галочку
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
