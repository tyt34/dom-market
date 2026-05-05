import { useEffect, useState, type FC } from 'react'
import { Card } from './components/Card'
import { Button } from '@mui/material'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import { getCard } from '@shared/api/getData/getCard'
import styles from './CardList.module.scss'

import { CardListMode } from './components/CardListMode'

interface Props {
  label: string
}

export const CardList: FC<Props> = ({ label }) => {
  const [units, setUnits] = useState<CardResponse[]>([])
  const [mode, setMode] = useState<'row' | 'column'>('column')

  const isDesktop = window.matchMedia('(min-width: 1920px)').matches

  const fetchCards = async (count: number) => {
    const requests = Array.from({ length: count }).map(() => getCard())
    const results = await Promise.all(requests)

    setUnits((state) => {
      return [...state, ...results]
    })
  }

  useEffect(() => {
    const count = isDesktop ? 4 : 1
    fetchCards(count)
  }, [isDesktop])

  const handleClick = async () => {
    const count = isDesktop ? 4 : 1
    const requests = Array.from({ length: count }).map(() => getCard())
    const results = await Promise.all(requests)

    setUnits((state) => {
      return [...state, ...results]
    })
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

      <div className={styles.cards}>
        {units.map((unit) => (
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
      </div>

      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 0px 12px 0px rgba(95, 100, 168, 0.05)',
          borderRadius: '4px',

          '&:hover': {
            backgroundColor: 'rgb(56, 202, 88)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        }}
      >
        <span className="t-13 black">Посмотреть ещё</span>
      </Button>
    </div>
  )
}
