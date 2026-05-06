import { type FC } from 'react'
import styles from './ImageRadioGroup.module.scss'
import type { OptionImage } from '@shared/types/types'
import { motion } from 'framer-motion'

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
  return (
    <div className={styles.wrapper}>
      {options.map((option) => {
        const active = value === option.value

        return (
          <motion.div
            key={option.value}
            className={styles.option}
            onClick={() => onChange(option.value)}
            whileHover={{
              y: -6,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            animate={{
              opacity: active ? 1 : 0.75,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 22,
            }}
          >
            <motion.img
              className="br-[10]"
              src={option.image}
              alt="image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              className={`t-16 w-500 mt-[10] rose ${active ? 'underline' : ''}`}
              animate={{
                scale: active ? 1.05 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            >
              {option.label}
            </motion.span>
          </motion.div>
        )
      })}
    </div>
  )
}
