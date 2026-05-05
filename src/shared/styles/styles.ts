export const INPUT_STYLES = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(245, 244, 241, 1)', // фон инпута
    borderRadius: '4px',
    // height: '60px',

    height: {
      xs: '60px',
      xl: '80px',
    },

    '& fieldset': {
      borderColor: 'transparent',
    },

    '&:hover fieldset': {
      borderColor: '#c7c7c7',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },

  '& .MuiOutlinedInput-input': {
    padding: '12px 19px',
    fontSize: {
      xs: '14px',
      xl: '18px',
    },
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: '#000', // цвет при фокусе
  },

  '& .MuiOutlinedInput-input::placeholder': {
    color: '#000',
    opacity: 1,
  },
}
