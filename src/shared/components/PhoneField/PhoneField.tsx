import { IMaskInput } from 'react-imask'
import { forwardRef } from 'react'
import { InputAdornment, TextField, useMediaQuery } from '@mui/material'
import { INPUT_STYLES } from '@shared/styles/styles'
import { THEME } from '@app/theme'
import phone from './assets/phone.svg'

const PhoneMask = forwardRef<HTMLInputElement, any>(
  function PhoneMask(props, ref) {
    const { onChange, ...other } = props

    return (
      <IMaskInput
        {...other}
        mask="+{7} (000) 000-00-00"
        inputRef={ref}
        onAccept={(value: string) => {
          onChange?.(value)
        }}
      />
    )
  },
)

export const PhoneField = () => {
  const isDesktop = useMediaQuery(THEME.breakpoints.up('md'))

  return (
    <TextField
      fullWidth
      placeholder="Ваш телефон"
      onChange={() => {}}
      InputProps={{
        inputComponent: PhoneMask as any,
        startAdornment: isDesktop ? (
          <InputAdornment position="start">
            <img
              className="ml-[10]"
              src={phone}
              // className={styles.mark}
              alt="mark"
            />
          </InputAdornment>
        ) : null,
      }}
      sx={INPUT_STYLES}
    />
  )
}
