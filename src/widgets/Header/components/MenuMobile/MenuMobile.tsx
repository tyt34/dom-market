import { AnimatePresence, motion } from 'framer-motion'
import { MENU_LIST } from '@shared/constants/constants'
import styles from './MenuMobile.module.scss'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: Props) => {
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
