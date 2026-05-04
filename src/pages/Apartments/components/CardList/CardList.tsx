import { type FC } from 'react'
import styles from './CardList.module.scss'
import { Card } from '../Card/Card'

interface Props {
  label: string
}

export const CardList: FC<Props> = ({ label }) => {
  return (
    <div className={styles.wrapper}>
      <span className="rose w-500 t-19">{label}</span>

      <Card count={4} />
    </div>
  )
}
