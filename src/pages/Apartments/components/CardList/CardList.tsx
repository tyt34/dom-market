import { useEffect, useState, type FC } from 'react'
import { Card } from './components/Card'
import { Button } from '@mui/material'
import type { CardResponse } from '@shared/api/getData/getCard.types'
import { getCard } from '@shared/api/getData/getCard'
import { getRandomInt } from '@shared/utils/utils'
import styles from './CardList.module.scss'

interface Props {
  label: string
}

export const CardList: FC<Props> = ({ label }) => {
  const [units, setUnits] = useState<CardResponse[]>([])

  const fetchCard = async () => {
    const data = await getCard()

    setUnits((state) => {
      return [...state, data]
    })
  }

  useEffect(() => {
    fetchCard()
  }, [])

  const handleClick = () => {
    fetchCard()
  }

  return (
    <div className={styles.wrapper}>
      <span className="rose w-500 t-19">{label}</span>
      {units.map((unit) => (
        <Card
          key={`${unit.Address}-${unit.Floor}-${unit.Price}`}
          count={getRandomInt(1, 8)}
          amountFloors={unit.FloorsTotal}
          amountRooms={unit.RoomsCount}
          area={unit.SqTotal}
          floor={unit.Floor}
          location={unit.Address}
          price={unit.Price}
          kind={unit.Type}
        />
      ))}
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
