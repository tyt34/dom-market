import { CallMe } from './components/CallMe'
import { CardList } from './components/CardList'
import { Filters } from './components/Filters'
import styles from './Apartments.module.scss'

export const ApartmentsPage = () => {
  return (
    <div>
      <Filters />

      <div className={styles.wrapper}>
        <CardList label="Квартиры по суперцене" />
        {/* <CardList label="Коммерческая недвижимость" /> */}
        <CallMe />
      </div>
    </div>
  )
}
