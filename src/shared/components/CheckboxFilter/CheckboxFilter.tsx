import { type FC } from 'react'
import { Checkbox } from '@mui/material'
import type { OptionsCheckbox } from '@shared/types/types'
import styles from './CheckboxFilter.module.scss'

interface Props {
  options: OptionsCheckbox
  value: boolean
  onChange: (value: string) => void
}

export const CheckboxFilter: FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperCheckbox}>
        <Checkbox
          checked={value}
          onChange={(e) => {
            onChange(`${e.target.checked}`)
          }}
          sx={{
            transform: 'scale(1.5)',
            color: 'rgba(202, 132, 129, 1)',
            '&.Mui-checked': {
              color: 'rgba(202, 132, 129, 1)',
            },
          }}
        />
      </div>

      <p className="t-18 rose">Суперцена</p>
    </div>
  )
}
