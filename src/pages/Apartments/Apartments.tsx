import { apartmentsStore } from './apartmentsStore'
import { CallMe } from './components/CallMe'
import { CardList } from './components/CardList'
import { Filters } from './components/Filters'
import { observer } from 'mobx-react-lite'
import styles from './Apartments.module.scss'

export const ApartmentsPage = observer(() => {
  const { isShowList } = apartmentsStore

  return (
    <div className="black-2">
      <Filters />

      <div className={styles.wrapper}>
        {isShowList && (
          <>
            <CardList
              label="Квартиры по суперцене"
              storageKey="apartments-1"
            />
            <CardList
              label="Коммерческая недвижимость"
              storageKey="apartments-2"
            />
          </>
        )}
        <CallMe />
      </div>
    </div>
  )
})
