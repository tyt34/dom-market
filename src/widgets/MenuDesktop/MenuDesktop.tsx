import { useState, type MouseEvent } from 'react'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'
import { Button } from '@mui/material'
import { MENU_LIST } from '@shared/constants/constants'
import styles from './MenuDesktop.module.scss'
import { settingsStore } from '@widgets/Settings/settingsStore'

export const MenuDesktop = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { setIsShow } = settingsStore

  const handleFavorite = () => {
    setIsFavorite((prev) => {
      const next = !prev

      // localStorage.setItem(KEY_IMAGES, String(next))

      return next
    })
  }

  // useEffect(() => {
  //   const stored = localStorage.getItem(KEY_IMAGES)

  //   if (stored === 'true') {
  //     setIsFavorite(true)
  //   } else {
  //     setIsFavorite(false)
  //   }
  // }, [])

  const handleSettings = (event: MouseEvent) => {
    event.preventDefault()
    setIsShow(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        {MENU_LIST.map((item) => {
          if (item.id === 'settings') {
            return (
              <a
                key={item.id}
                className="white t-15 w-500"
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
              className="white t-15 w-500"
              href="/"
            >
              {item.title}
            </a>
          )
        })}
      </div>

      <div className={styles.right}>
        <div
          className={styles.favorite}
          onClick={handleFavorite}
        >
          <img
            src={isFavorite ? favoriteFull : favorite}
            alt="favorite"
          />
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            boxShadow: '0px 0px 12px 0px rgba(95, 100, 168, 0.05)',
            borderRadius: '4px',
            height: '45px',

            '&:hover': {
              backgroundColor: 'rgb(56, 202, 88)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            },
          }}
        >
          <span className="brown t-16 w-700">
            {'Срочный выкуп за 3 дня'.toUpperCase()}
          </span>
        </Button>
      </div>
    </div>
  )
}
