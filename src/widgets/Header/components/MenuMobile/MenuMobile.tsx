import { AnimatePresence, motion } from 'framer-motion'
import { MENU_LIST } from '@shared/constants/constants'
import { settingsStore } from '@widgets/Settings/settingsStore'
import type { MouseEvent } from 'react'
import styles from './MenuMobile.module.scss'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: Props) => {
  const { setIsShow } = settingsStore

  const handleSettings = (event: MouseEvent) => {
    event.preventDefault()
    setIsShow(true)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{
            y: '-100%',
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: '-100%',
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          <div className={styles.header}>
            <button onClick={onClose}>Закрыть</button>
          </div>

          <div className={styles.content}>
            {MENU_LIST.map((item) => {
              if (item.id === 'settings') {
                return (
                  <a
                    key={item.id}
                    onClick={handleSettings}
                    href="/"
                  >
                    {item.title}
                  </a>
                )
              }
              return (
                <a
                  key={item.id}
                  href="/"
                >
                  {item.title}
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
