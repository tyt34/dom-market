import { CardImages } from '../../../../../../shared/components/CardImages'
import { formatNumber, getRandomInt } from '@shared/utils/utils'
import { ROUTES } from '@app/router.constants'
import { useRef, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import mark from './assets/mark.svg'
import styles from './Card.module.scss'

interface Props {
  // count: number
  price: number
  location: string
  amountRooms: number
  area: number
  floor: number
  amountFloors: number
  kind: string
  mode: 'row' | 'column'
}

const randomNumber = () => {
  return Math.floor(Math.random() * 100000) + 1
}

// const count = getRandomInt(1, 8)

export const Card: FC<Props> = ({
  amountFloors,
  floor,
  area,
  amountRooms,
  location,
  price,
  kind,
  mode,
}) => {
  const countRef = useRef(getRandomInt(1, 8))
  const count = countRef.current

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`${ROUTES.APARTMENTS}/${randomNumber()}`)
  }

  return (
    <div className={`${styles.wrapper} ${styles[mode]}`}>
      <CardImages
        count={count}
        isFavorite
      />
      <div
        className={styles.bottom}
        onClick={handleClick}
      >
        <div className={styles.priceAndMark}>
          <p className="w-600 t-25">{formatNumber(price)} ₽</p>
          <img
            src={mark}
            className={styles.mark}
            alt="mark"
          />
        </div>
        <p className="t-13">{location}</p>
        <p className="t-13">
          {amountRooms}-комн. · {area} м² · {floor}/{amountFloors} ·{' '}
          {kind}
        </p>
      </div>
    </div>
  )
}
