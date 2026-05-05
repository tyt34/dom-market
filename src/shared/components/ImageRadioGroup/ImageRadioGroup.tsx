import { type FC } from 'react'
import styles from './ImageRadioGroup.module.scss'
import type { OptionImage } from '@shared/types/types'

interface Props {
  options: OptionImage[]
  value: string
  onChange: (value: string) => void
}

export const ImageRadioGroup: FC<Props> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(value)
  }

  return (
    <div className={styles.wrapper}>
      {options.map((option) => {
        return (
          <div
            className={styles.option}
            onClick={() => {
              handleChange(option.value)
            }}
            key={option.value}
          >
            <img
              className="br-[10]"
              src={option.image}
              alt="image"
            />

            <span
              className={`t-16 w-500 mt-[10] rose ${value === option.value ? 'underline' : ''}`}
            >
              {option.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
