import { apartmentsStore } from './apartmentsStore'
import { CallMe } from './components/CallMe'
import { CardList } from './components/CardList'
import { Filters } from './components/Filters'
import { observer } from 'mobx-react-lite'
import styles from './Apartments.module.scss'

export const ApartmentsPage = observer(() => {
  const { isShowList } = apartmentsStore

  return (
    <div>
      <Filters />

      <div className={styles.wrapper}>
        {isShowList && (
          <>
            <CardList label="Квартиры по суперцене" />
            <CardList label="Коммерческая недвижимость" />
          </>
        )}
        <CallMe />
      </div>
    </div>
  )
})
