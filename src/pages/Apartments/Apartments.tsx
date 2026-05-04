import { CardList } from './components/CardList'
import { Filters } from './components/Filters'

export const ApartmentsPage = () => {
  return (
    <div>
      <Filters />

      <CardList label="Квартиры по суперцене" />
      <CardList label="Коммерческая недвижимость" />
    </div>
  )
}
