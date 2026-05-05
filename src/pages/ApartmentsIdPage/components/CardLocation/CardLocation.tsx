import { type FC } from 'react'
import styles from './CardLocation.module.scss'
import type { CardResponse } from '@shared/api/getData/getCard.types'

interface Props {
  data: CardResponse | null
}

const getRandomLatLng = () => {
  const lat = 48.4 + Math.random() * 0.8 // широта
  const lng = 44.0 + Math.random() * 1.5 // долгота

  // return { lat, lng }

  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`
  return src
}

export const CardLocation: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p className="t-18 w-400">Расположение</p>
        <p className="black-2 t-14 w-500 ">{data?.Address}</p>
      </div>

      <iframe
        className="mt-[16]"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.7701237552663!2d44.50652701337872!3d48.7199122199605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb6a5ecef251%3A0x5917479f1677ac6!2z0JbQuNCy0LXQvCDQlNC-0LzQsA!5e1!3m2!1sru!2sru!4v1777971840511!5m2!1sru!2sru"
        src={getRandomLatLng()}
        width="100%"
        height="337"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
