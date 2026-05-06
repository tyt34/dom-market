import { type FC } from 'react'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import styles from './CardLocation.module.scss'

interface Props {
  data: CardResponse | null
}

const getRandomLatLng = () => {
  const lat = 48.4 + Math.random() * 0.4 // широта
  const lng = 44.1 + Math.random() * 0.8 // долгота

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`
  return src
}

const location = getRandomLatLng()

export const CardLocation: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p className="t-18 w-400">Расположение</p>
        <p className="black-2 t-14 w-500 ">{data?.Address}</p>
      </div>

      <iframe
        className="mt-[16]"
        src={location}
        width="100%"
        height="337"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
