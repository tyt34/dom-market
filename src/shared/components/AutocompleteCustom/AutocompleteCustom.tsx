import { type FC } from 'react'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import location from './assets/location.svg'
import arrow from '@shared/assets/icons/arrow.svg'
import styles from './AutocompleteCustom.module.scss'
import type { Option } from '@shared/types/types'

interface Props {
  options: Option[]
  label: string
  value: string
  onChange: (value: string) => void
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
        value={options.find((item) => item.value === value) || null}
        onChange={(_, newValue) => {
          onChange(newValue?.value || '')
        }}
        popupIcon={
          <img
            src={arrow}
            alt="arrow"
            className={styles.arrow}
          />
        }
        sx={{
          '& .MuiAutocomplete-popupIndicator': {
            display: {
              xs: 'flex',
              xl: 'none',
            },
          },
          '& .MuiOutlinedInput-root': {
            padding: {
              xs: '16.5px 14px;',
              xl: '14px',
            },
          },
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
                fontSize: {
                  xs: '13px',
                  xl: '18px',
                },
                color: {
                  xs: '#999999',
                  xl: '#000',
                },
                fontFamily: {
                  xs: 'Proxima Nova',
                  xl: 'Montserrat',
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                right: '15px !important',
              },
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment
                    position="start"
                    sx={{
                      marginRight: '5px',
                    }}
                  >
                    <div className={styles.leftSideMobile}>
                      <p className="black t-13 font-s w-[90]">Адрес</p>
                    </div>

                    <div className={styles.leftSideDesktop}>
                      <img
                        src={location}
                        className={`${styles.mark} ml-[18] mr-[12]`}
                        alt="mark"
                      />
                    </div>
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
