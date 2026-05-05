import { Link } from 'react-router-dom'
import { ROUTES } from '@app/router.constants'
import Button from '@mui/material/Button'

import './Navigation.style.scss'

export const NavigationPage = () => {
  return (
    <section className="navigation">
      <h1>Добро пожаловать!</h1>
      <p className="navigation__description">
        Это демонстрационное приложение для покупки и продажи квартир. В
        нём реализован базовый функционал фильтрации и просмотра
        объявлений.
      </p>

      <nav className="navigation__list mt-[20]">
        <Link to={ROUTES.APARTMENTS}>
          <Button
            variant="contained"
            className="navigation__button"
          >
            Список объявлений
          </Button>
        </Link>
      </nav>
    </section>
  )
}
