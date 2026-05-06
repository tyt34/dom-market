import { useMemo, type FC } from 'react'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import styles from './MetaData.module.scss'
import areaFull from './assets/area-full.svg'
import area from './assets/area.svg'
import rooms from './assets/rooms.svg'
import floor from './assets/floor.svg'
import typeHouse from './assets/type.svg'
import { getRandomInt } from '@shared/utils/utils'
import { Skeleton } from '@mui/material'

interface Props {
  data: CardResponse | null
}

export const MetaData: FC<Props> = ({ data }) => {
  const fullArea = useMemo(() => {
    if (!data) return 0

    return getRandomInt(data.SqTotal ?? 0, (data.SqTotal ?? 0) + 50)
  }, [data])

  const metaItems = useMemo(() => {
    return [
      {
        icon: areaFull,
        label: 'Площадь',
        value: data ? `${fullArea} м²` : null,
      },
      {
        icon: area,
        label: 'Жилая',
        value: data?.SqTotal ? `${data.SqTotal} м²` : null,
      },
      {
        icon: rooms,
        label: 'Комнат',
        value: data?.RoomsCount ?? null,
      },
      {
        icon: floor,
        label: 'Этаж',
        value:
          data?.Floor && data?.FloorsTotal
            ? `${data.Floor}/${data.FloorsTotal}`
            : null,
      },
      {
        icon: typeHouse,
        label: 'Класс жилья',
        value: data?.Type ?? null,
      },
    ]
  }, [data, fullArea])

  return (
    <div className={styles.wrapper}>
      <div className={styles.mobile}>
        <div className={styles.leftRow}>
          {metaItems.map((item, index) => (
            <div
              key={index}
              className={styles.left}
            >
              <div className={styles.wrapperImg}>
                <img
                  src={item.icon}
                  alt={item.label}
                />
              </div>

              <p className="brown w-500 t-11">{item.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.rightRow}>
          {metaItems.map((item, index) => (
            <div key={index}>
              {item.value ? (
                <p className="black-2 t-16 w-500">{item.value}</p>
              ) : (
                <Skeleton
                  width={80}
                  height={16}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.desktop}>
        {metaItems.map((item, index) => (
          <div
            key={index}
            className={styles.unit}
          >
            <div className={styles.wrapperImg}>
              <img
                src={item.icon}
                alt={item.label}
              />
            </div>

            <div className="mt-[-3]">
              <p className=" w-500 t-18">{item.label}</p>
              <p className=" w-500 t-18">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
