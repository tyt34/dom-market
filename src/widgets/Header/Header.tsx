import { MobileMenu } from './components/MenuMobile'
import { ROUTES } from '@app/router.constants'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'
import location from './assets/location.svg'
import logo from './assets/logo.svg'
import menu from './assets/menu.svg'
import phone from './assets/phone.svg'
import phone2 from './assets/phone-2.svg'
import vk from './assets/vk.svg'
import styles from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleFavorite = () => {
    setIsFavorite((prev) => {
      const next = !prev

      // localStorage.setItem(KEY_IMAGES, String(next))

      return next
    })
  }

  const handleClick = () => {
    navigate(ROUTES.APARTMENTS)
  }

  // useEffect(() => {
  //   const stored = localStorage.getItem(KEY_IMAGES)

  //   if (stored === 'true') {
  //     setIsFavorite(true)
  //   } else {
  //     setIsFavorite(false)
  //   }
  // }, [])

  return (
    <>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
      />

      <div className={styles.wrapper}>
        <div
          className={styles.menu}
          onClick={handleOpenMenu}
        >
          <img
            src={menu}
            alt="menu"
          />

          <div>
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

        <div
          className={styles.logoText}
          onClick={handleClick}
        >
          <p className="t-10 w-400">Живем</p>
          <p className="t-13 w-600">Дома</p>
        </div>

        <div className={styles.rightButtonsMobile}>
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

        <div className={styles.rightButtons}>
          <div className={`${styles.wrapperIcon} mr-[10]`}>
            <img
              src={vk}
              alt="phone"
            />
          </div>

          <div className={`${styles.wrapperIcon} mr-[39]`}>
            <img
              src={phone2}
              alt="phone"
            />
          </div>

          <div className={`${styles.wrapperIconMini} mr-[6]`}>
            <img
              src={location}
              alt="phone"
            />
          </div>

          <span className="t-15 w-500 mr-[26]">Волгоград</span>

          <div className={`${styles.wrapperIconMini} mr-[7]`}>
            <img
              src={phone}
              alt="phone"
            />
          </div>

          <span className="t-15 w-500 ">+7 (8442) 52-05-05</span>
        </div>
      </div>
    </>
  )
}
