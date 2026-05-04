import { type FC } from 'react'
import styles from './CardList.module.scss'
import { Card } from './components/Card'

interface Props {
  label: string
}

const randomCount = () => Math.floor(Math.random() * 8) + 1

export const CardList: FC<Props> = ({ label }) => {
  return (
    <div className={styles.wrapper}>
      <span className="rose w-500 t-19">{label}</span>

      <Card
        count={randomCount()}
        amountFloors={5}
        amountRooms={2}
        area={30}
        floor={2}
        location="Волгоград, Советский Малиновского 8"
        price={3000000}
      />
      {/* <Card count={randomCount()} /> */}
      {/* <Card count={randomCount()} /> */}
      {/* <Card count={4} /> */}
    </div>
  )
}
