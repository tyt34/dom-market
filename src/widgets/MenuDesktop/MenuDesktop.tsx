import { useState } from 'react'
import styles from './MenuDesktop.module.scss'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'
import { Button } from '@mui/material'

export const MenuDesktop = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <a className="white t-15 w-500"> О компании</a>
        <a className="white t-15 w-500"> Услуги</a>
        <a className="white t-15 w-500"> Каталог</a>
        <a className="white t-15 w-500"> Новостройки</a>
        <a className="white t-15 w-500"> Ипотека</a>
        <a className="white t-15 w-500"> Строительство</a>
        <a className="white t-15 w-500"> Отзывы</a>
        <a className="white t-15 w-500"> Контакты</a>
      </div>

      <div className={styles.right}>
        <div
          className={styles.favorite}
          onClick={() => setIsFavorite((prev) => !prev)}
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
