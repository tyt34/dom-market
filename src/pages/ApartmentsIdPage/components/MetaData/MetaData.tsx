import { type FC } from 'react'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import styles from './MetaData.module.scss'
import areaFull from './assets/area-full.svg'
import area from './assets/area.svg'
import rooms from './assets/rooms.svg'
import floor from './assets/floor.svg'
import typeHouse from './assets/type.svg'
import { getRandomInt } from '@shared/utils/utils'

interface Props {
  data: CardResponse | null
}

export const MetaData: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftRow}>
        <div className={styles.left}>
          <div className={styles.wrapperImg}>
            <img
              src={areaFull}
              alt="favorite"
            />
          </div>

          <p className="brown w-500 t-11">Площадь</p>
        </div>

        <div className={styles.left}>
          <div className={styles.wrapperImg}>
            <img
              src={area}
              alt="favorite"
            />
          </div>

          <p className="brown w-500 t-11">Жилая</p>
        </div>

        <div className={styles.left}>
          <div className={styles.wrapperImg}>
            <img
              src={rooms}
              alt="favorite"
            />
          </div>

          <p className="brown w-500 t-11">Комнат</p>
        </div>

        <div className={styles.left}>
          <div className={styles.wrapperImg}>
            <img
              src={floor}
              alt="favorite"
            />
          </div>

          <p className="brown w-500 t-11">Этаж</p>
        </div>

        <div className={styles.left}>
          <div className={styles.wrapperImg}>
            <img
              src={typeHouse}
              alt="favorite"
            />
          </div>

          <p className="brown w-500 t-11">Класс жилья</p>
        </div>
      </div>

      <div className={styles.rightRow}>
        <p className="black-2 t-16 w-500">
          {getRandomInt(data?.SqTotal ?? 0, (data?.SqTotal ?? 0) + 50)}{' '}
          м²
        </p>

        <p className="black-2 t-16 w-500">{data?.SqTotal} м²</p>

        <p className="black-2 t-16 w-500">{data?.RoomsCount} </p>

        <p className="black-2 t-16 w-500">
          {data?.Floor}/{data?.FloorsTotal}
        </p>

        <p className="black-2 t-16 w-500">{data?.Type} </p>
      </div>
    </div>
  )
}
