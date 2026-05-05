import { FormControl, MenuItem, Select } from '@mui/material'
import { useState, type FC } from 'react'
import type { Option } from '@shared/types/types'
import arrow from './assets/arrow.svg'

import styles from './SelectCustomDesktop.module.scss'

interface Props {
  options: Option[]
  label: string
  value: string
  onChange: (value: string) => void
}

export const SelectCustomDesktop: FC<Props> = ({
  options,
  // label,
  onChange,
  value,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <FormControl className={styles.wrapper}>
      <Select
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        className={styles.select}
        IconComponent={() => (
          <img
            src={arrow}
            className={styles.arrow}
            alt="arrow"
          />
        )}
        sx={{
          '& .MuiSelect-icon': {
            left: 12,
            right: 'auto',
            top: '50%',
            transform: 'translateY(-50%)', // важно
          },
          '& .MuiSelect-select': {
            paddingLeft: '72px',
            paddingRight: '12px',
            fontSize: '18px !important',
          },
          '& .MuiTypography-root': {
            fontSize: '30px !important',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              fontSize: '18px !important',
              padding: '14px 16px',
              height: '80px',
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
