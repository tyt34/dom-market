import { type FC } from 'react'
import { CardImages } from './components/CardImages'
import mark from './assets/mark.svg'

import styles from './Card.module.scss'

interface Props {
  count: number
  price: number
  location: string
  amountRooms: number
  area: number
  floor: number
  amountFloors: number
}

const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const Card: FC<Props> = ({
  count,
  amountFloors,
  floor,
  area,
  amountRooms,
  location,
  price,
}) => {
  return (
    <div className={styles.wrapper}>
      <CardImages count={count} />

      <div className={styles.bottom}>
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
          {amountRooms}-комн. · {area} м² · {floor}/{amountFloors}
        </p>
      </div>
    </div>
  )
}
