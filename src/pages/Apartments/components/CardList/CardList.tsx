import { useEffect, useState, type FC } from 'react'
import { Card } from './components/Card'
import { Button, Skeleton } from '@mui/material'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import { getCard } from '@shared/api/getData/getCard'
import styles from './CardList.module.scss'

import { CardListMode } from './components/CardListMode'
import { useBreakpoints } from '@shared/hooks/useBreakpoints'

interface Props {
  label: string
}

export const CardList: FC<Props> = ({ label }) => {
  const [units, setUnits] = useState<CardResponse[]>([])
  const [mode, setMode] = useState<'row' | 'column'>('column')
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)

  const { isDesktop } = useBreakpoints()

  const fetchCards = async (
    count: number,
    mode: 'initial' | 'more',
  ) => {
    if (mode === 'initial') {
      setLoading(true)
    } else {
      setLoadingMore(true)
    }

    await new Promise(requestAnimationFrame)

    try {
      const requests = Array.from({ length: count }).map(() =>
        getCard(),
      )
      const results = await Promise.all(requests)

      setUnits((state) => [...state, ...results])
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  useEffect(() => {
    const count = isDesktop ? 4 : 1
    fetchCards(count, 'initial')
  }, [isDesktop])

  const handleClick = () => {
    const count = isDesktop ? 4 : 1
    fetchCards(count, 'more')
  }

  const handleMode = () => {
    setMode((state) => {
      return state === 'row' ? 'column' : 'row'
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className="rose w-500 t-19">{label}</span>
        <div className={styles.buttons}>
          <CardListMode
            mode={mode}
            handleClick={handleMode}
          />
        </div>
      </div>

      <div
        className={`${mode === 'column' ? styles.cardsColumn : styles.cardsRow} `}
      >
        {loading && units.length === 0
          ? Array.from({ length: isDesktop ? 4 : 1 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={mode === 'column' ? 564 : 278}
                sx={{
                  borderRadius: 2,
                }}
              />
            ))
          : units.map((unit) => (
              <Card
                key={`${unit.Address}-${unit.Floor}-${unit.Price}`}
                amountFloors={unit.FloorsTotal}
                amountRooms={unit.RoomsCount}
                area={unit.SqTotal}
                floor={unit.Floor}
                location={unit.Address}
                price={unit.Price}
                kind={unit.Type}
                mode={mode}
              />
            ))}

        {loadingMore &&
          Array.from({ length: isDesktop ? 4 : 1 }).map((_, i) => (
            <Skeleton
              key={`more-${i}`}
              variant="rectangular"
              height={mode === 'column' ? 564 : 278}
            />
          ))}
      </div>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 0px 12px 0px rgba(95, 100, 168, 0.05)',
          borderRadius: '4px',
          height: '48px',

          '&:hover': {
            backgroundColor: 'rgb(56, 202, 88)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        {/* <span className="t-13 black">Посмотреть ещё</span> */}
        <span className={styles.textButton}>Посмотреть ещё</span>
      </Button>
    </div>
  )
}
