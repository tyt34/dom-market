import { useEffect, useState, type FC } from 'react'
import styles from './CardList.module.scss'
import { Card } from './components/Card'
import { Button } from '@mui/material'

interface Props {
  label: string
}

interface UnitApi {
  Price: number
  Address: string
  RoomsCount: number
  SqTotal: number
  Floor: number
  FloorsTotal: number
  Type: string
}

const randomCount = () => Math.floor(Math.random() * 8) + 1

export const CardList: FC<Props> = ({ label }) => {
  const [units, setUnits] = useState<UnitApi[]>([])

  const fetchUnits = async () => {
    try {
      const res = await fetch(
        'https://jivemdoma.space/api/v1/frontend-test/catalog/units/rand',
      )

      if (res.ok) {
        const data: UnitApi = await res.json()

        setUnits((state) => {
          return [...state, data]
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  const handleClick = () => {
    fetchUnits()
  }

  return (
    <div className={styles.wrapper}>
      <span className="rose w-500 t-19">{label}</span>
      {units.map((unit) => (
        <Card
          key={`${unit.Address}-${unit.Floor}-${unit.Price}`}
          count={randomCount()}
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
