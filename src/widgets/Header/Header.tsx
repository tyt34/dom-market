import styles from './Header.module.scss'
import menu from './assets/menu.svg'
import logo from './assets/logo.svg'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'
import phone from './assets/phone.svg'
import { useEffect, useState } from 'react'
import { KEY_IMAGES } from '@shared/constants/constants'

export const Header = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const handleFavorite = () => {
    setIsFavorite((prev) => {
      const next = !prev

      localStorage.setItem(KEY_IMAGES, String(next))

      return next
    })
  }

  useEffect(() => {
    const stored = localStorage.getItem(KEY_IMAGES)

    if (stored === 'true') {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <img
          src={menu}
          alt="menu"
        />
        <div className={styles.textMenu}>
          <p className="t-6 w-600 brown">МЕНЮ</p>
        </div>
      </div>

      <div>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
        />
      </div>

      <div className={styles.logoText}>
        <p className="t-10 w-400">Живем</p>
        <p className="t-13 w-600">Дома</p>
      </div>
      <div className={styles.rightButtons}>
        <img
          src={isFavorite ? favoriteFull : favorite}
          alt="favorite"
          className={styles.favorite}
          onClick={handleFavorite}
        />

        <img
          src={phone}
          alt="phone"
        />
      </div>
    </div>
  )
}
