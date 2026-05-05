import { type FC } from 'react'
import styles from './AutocompleteCustom.module.scss'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import type { Option } from '@shared/types/types'
import location from './assets/location.svg'

interface Props {
  options: Option[]
  label: string
  value: Option
  onChange: (value: Option) => void
}

export const AutocompleteCustom: FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <Autocomplete
        fullWidth
        options={options}
        value={value}
        onChange={(_, newValue) => {
          if (newValue) {
            onChange(newValue)
          } else {
            onChange({ value: '', label: '' })
          }
        }}
        slotProps={{
          paper: {
            sx: {
              '& .MuiAutocomplete-option': {
                fontSize: '18px',
                height: '40px',
              },
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            fullWidth
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '18px',
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <img
                      src={location}
                      className={`${styles.mark} ml-[18] mr-[12]`}
                      alt="mark"
                    />
                  </InputAdornment>

                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  )
}
