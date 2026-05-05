import { getCard } from '@shared/api/getData/getCard'
import { useEffect, useState } from 'react'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import styles from './ApartmentsIdPage.module.scss'
import { CardImages } from '@components/CardImages'
import { formatNumber, getRandomInt } from '@shared/utils/utils'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'

const randomNumber = getRandomInt(1, 8)

export const ApartmentsIdPage = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [data, setData] = useState<CardResponse | null>(null)

  const fetchCard = async () => {
    const data = await getCard()

    setData(data)
  }

  useEffect(() => {
    fetchCard()
  }, [])

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  return (
    <div className={styles.wrapper}>
      <p className="black-2 t-14 w-500 mb-[10]">{data?.Address}</p>

      <div className={styles.card}>
        <CardImages count={randomNumber} />

        <div className={`${styles.line} mt-[10]`}>
          <div
            className={styles.wrapperImg}
            onClick={handleFavorite}
          >
            <img
              src={isFavorite ? favoriteFull : favorite}
              alt="favorite"
            />
          </div>

          <p className="w-600 t-19 black-2">
            {formatNumber(data?.Price ?? 0)} ₽
          </p>
        </div>
      </div>
    </div>
  )
}
