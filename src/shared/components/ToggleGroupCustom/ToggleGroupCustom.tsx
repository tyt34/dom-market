import { type FC } from 'react'
import type { Option } from '@shared/types/types'
import styles from './ToggleGroupCustom.module.scss'

interface Props {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
}

export const ToggleGroupCustom: FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.label} t-13 w-400 font-s`}>
        {label}
      </span>

      <div className={styles.group}>
        {options.map((option) => {
          const active = option.value === value

          return (
            <button
              key={option.value}
              type="button"
              className={`${styles.button} ${active ? styles.active : ''}`}
              onClick={() => onChange(option.value)}
            >
              <span className="t-13 w-400">{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
