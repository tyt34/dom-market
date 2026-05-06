import { Button, Skeleton } from '@mui/material'
import { CardImages } from '@components/CardImages'
import { formatNumber, getRandomInt } from '@shared/utils/utils'
import { getCard } from '@shared/api/getData/getCard'
import { MetaData } from './components/MetaData'
import { useEffect, useState } from 'react'
import favorite from './assets/favorite.svg'
import favoriteFull from './assets/favorite-full.svg'
import phone from './assets/phone.svg'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import styles from './ApartmentsIdPage.module.scss'
import { DataDescription } from './components/DataDescription'
import { CardLocation } from './components/CardLocation'
import { motion } from 'framer-motion'

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
    <div className={`${styles.wrapper} black-2`}>
      <div className={styles.mobile}>
        <p className="t-14 w-500 mb-[10]">{data?.Address}</p>
      </div>

      <div className={styles.desktop}>
        <p className="t-25 mt-[44] mb-[15]">Продажа - {data?.Type}</p>
      </div>

      <div className={styles.card}>
        <CardImages
          count={randomNumber}
          isOnly
        />

        <div className={styles.buttons}>
          <div className={`${styles.lineReverse} mt-[10]`}>
            {/* <div
              className={styles.wrapperImg}
              onClick={handleFavorite}
            >
              <img
                src={isFavorite ? favoriteFull : favorite}
                alt="favorite"
              />
            </div> */}

            <motion.div
              className={styles.wrapperImg}
              onClick={handleFavorite}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }}
            >
              <img
                src={isFavorite ? favoriteFull : favorite}
                alt="favorite"
              />
            </motion.div>

            <div>
              <p className="w-600 t-19-35">
                {data ? (
                  `${formatNumber(data.Price)} ₽`
                ) : (
                  <Skeleton
                    width={80}
                    height={19}
                  />
                )}
              </p>

              <div className={styles.desktop}>
                {data ? (
                  <p className="w-500 t-19-19"> {data.Address}</p>
                ) : (
                  <Skeleton
                    width={80}
                    height={19}
                  />
                )}
              </div>
            </div>
          </div>

          <div className={`${styles.line} mt-[8]`}>
            <div className={styles.wrapperPhone}>
              <img
                src={phone}
                alt="favorite"
              />
            </div>

            {data ? (
              <p className="w-600 t-19-35"> 8 (927) 512 05 05</p>
            ) : (
              <Skeleton
                width={80}
                height={19}
              />
            )}
          </div>

          <div>
            <Button
              variant="contained"
              sx={{
                height: '63px',
                width: '100%',
                borderRadius: '4px',
                marginTop: '14px',
                backgroundColor: 'rgba(219, 154, 152, 1)',
              }}
            >
              <span className="t-16 w-600">Заказать звонок</span>
            </Button>

            <Button
              variant="contained"
              sx={{
                height: '63px',
                width: '100%',
                borderRadius: '4px',
                marginTop: '8px',
                backgroundColor: 'rgba(190, 175, 153, 1)',
              }}
            >
              <span className="t-16 w-600">
                Предложить вариант для обмена
              </span>
            </Button>
          </div>
        </div>
      </div>

      <MetaData data={data} />

      <DataDescription />

      <CardLocation data={data} />
    </div>
  )
}
