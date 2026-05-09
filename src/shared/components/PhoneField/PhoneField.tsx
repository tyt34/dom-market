import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import { InputAdornment, TextField } from '@mui/material'
import { useBreakpoints } from '@shared/hooks/useBreakpoints'
import phone from './assets/phone.svg'
import { INPUT_STYLES } from '@shared/styles/styles'

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
  const { isDesktop } = useBreakpoints()

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
              alt="mark"
            />
          </InputAdornment>
        ) : null,
      }}
      sx={INPUT_STYLES}
    />
  )
}
