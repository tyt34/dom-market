import {
  OPTIONS_AREA,
  OPTIONS_CITY,
  OPTIONS_HOME,
  OPTIONS_ROOMS_MOBILE,
  OPTIONS_SUPER,
  OPTIONS_TYPE_DEAL,
  OPTIONS_TYPE_PRICE,
} from '../components/Filters/Filters.constants'
import type { FiltersState } from './apartmentsStore.types'

export const getFiltersFromUrl = (): FiltersState => {
  const params = new URLSearchParams(window.location.search)

  return {
    city: params.get('city') ?? OPTIONS_CITY[0].value,
    homeType: params.get('homeType') ?? OPTIONS_HOME[0].value,
    area: params.get('area') ?? OPTIONS_AREA[0].value,
    rooms: params.get('rooms') ?? OPTIONS_ROOMS_MOBILE[0].value,
    deal: params.get('deal') ?? OPTIONS_TYPE_DEAL[0].value,
    price: params.get('price') ?? OPTIONS_TYPE_PRICE[0].value,
    super: params.get('super') ?? OPTIONS_SUPER[0].value,
  }
}
