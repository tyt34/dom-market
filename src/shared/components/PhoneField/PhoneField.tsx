import { IMaskInput } from 'react-imask'
import { forwardRef } from 'react'
import { TextField } from '@mui/material'
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
  return (
    <TextField
      fullWidth
      placeholder="Ваш телефон"
      onChange={() => {}}
      InputProps={{
        inputComponent: PhoneMask as any,
      }}
      sx={INPUT_STYLES}
    />
  )
}
