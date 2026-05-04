import { FormControl, MenuItem, Select } from '@mui/material'
import { useState, type FC } from 'react'
import type { Option } from '@shared/types/types'
import arrow from './assets/arrow.svg'

import styles from './SelectCustom.module.scss'

interface Props {
  options: Option[]
  label: string
}

export const SelectCustom: FC<Props> = ({ options, label }) => {
  const [value, setValue] = useState(options[0]?.value ?? '')
  const [open, setOpen] = useState(false)

  return (
    <FormControl className={styles.wrapper}>
      <Select
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        IconComponent={() => (
          <img
            src={arrow}
            className={`${styles.arrow} ${open ? styles.open : ''}`}
            alt="arrow"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(true)
            }}
          />
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        className={styles.select}
        renderValue={(selected) => {
          const current = options.find((o) => o.value === selected)
          return (
            <div className={styles.value}>
              <span className={`${styles.label} t-13 w-600 font-s`}>
                {label}
              </span>
              <span className={`${styles.text} t-13 font-s gray`}>
                {current?.label}
              </span>
            </div>
          )
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            <span className={`${styles.option} t-13 font-s`}>
              {option.label}
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
