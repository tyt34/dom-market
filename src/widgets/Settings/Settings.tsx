import { Button } from '@mui/material'
import { fileToBase64 } from '@shared/utils/utils'
import { indexdb } from '@shared/lib/indexdb'
import { motion } from 'framer-motion'
import { settingsStore } from './settingsStore'
import type { ChangeEvent } from 'react'
import styles from './Settings.module.scss'

type Props = {
  width?: number
  height?: number
}

export const Settings = ({ width = 400, height = 250 }: Props) => {
  const { setIsShow, setBackgroundImage, setDefaultBackground } =
    settingsStore

  const handleSettings = () => {
    setIsShow(false)
  }

  const handleFileChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const base64 = await fileToBase64(file)
    setBackgroundImage(base64)
    await indexdb.saveBackground(base64)
  }

  const handleResetBackground = async () => {
    setDefaultBackground()
    await indexdb.clearBackground()
  }

  return (
    <>
      <motion.div
        drag
        dragMomentum={false}
        className={styles.wrapper}
        style={{
          width,
          height,
        }}
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {/* <Fire /> */}

        <div className={styles.header}>
          <span>Settings</span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={handleSettings}
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          <Button
            variant="contained"
            type="button"
            onClick={handleResetBackground}
            className={styles.resetButton}
          >
            Сбросить фон
          </Button>
        </div>
      </motion.div>
    </>
  )
}
