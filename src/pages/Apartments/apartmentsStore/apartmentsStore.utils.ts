import {
  OPTIONS_AREA,
  OPTIONS_CITY,
  OPTIONS_HOME,
  OPTIONS_ROOMS,
} from '../components/Filters/Filters.constants'
import type { FiltersState } from './apartmentsStore.types'

export const getFiltersFromUrl = (): FiltersState => {
  const params = new URLSearchParams(window.location.search)

  return {
    city: params.get('city') ?? OPTIONS_CITY[0].value,
    homeType: params.get('homeType') ?? OPTIONS_HOME[0].value,
    area: params.get('area') ?? OPTIONS_AREA[0].value,
    rooms: params.get('rooms') ?? OPTIONS_ROOMS[0].value,
  }
}
