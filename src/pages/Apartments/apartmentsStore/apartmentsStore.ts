import { makeAutoObservable, reaction } from 'mobx'
import type { FiltersState } from './apartmentsStore.types'
import { getFiltersFromUrl } from './apartmentsStore.utils'
import { ROUTES } from '@app/router.constants'

class ApartmentsStore {
  /** true - список квартир отображается */
  isShowList: boolean = false

  filters: FiltersState = getFiltersFromUrl()

  constructor() {
    makeAutoObservable(this)
    this.initUrlSync()
    this.initInitialUrlSync()
  }

  initUrlSync() {
    reaction(
      () => ({ ...this.filters }),
      (filters) => {
        if (window.location.pathname !== ROUTES.APARTMENTS) {
          return
        }

        const params = new URLSearchParams()

        Object.entries(filters).forEach(([key, value]) => {
          if (value) {
            params.set(key, value)
          }
        })

        const newUrl = `${window.location.pathname}?${params.toString()}`

        window.history.replaceState(null, '', newUrl)
      },
    )
  }

  initInitialUrlSync() {
    if (window.location.pathname !== ROUTES.APARTMENTS) {
      return
    }

    const params = new URLSearchParams(window.location.search)

    const hasAnyParams = Array.from(params.keys()).length > 0

    if (!hasAnyParams) {
      const newParams = new URLSearchParams()

      Object.entries(this.filters).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value)
        }
      })

      const newUrl = `${window.location.pathname}?${newParams.toString()}`

      window.history.replaceState(null, '', newUrl)
    }
  }

  changeIsShowList = (value: boolean) => {
    this.isShowList = value
  }

  setFilter = <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K],
  ) => {
    this.filters[key] = value
  }

  // resetFilters = () => {
  //   this.filters = {
  //     city: '',
  //     homeType: '',
  //     area: '',
  //     rooms: '',
  //     deal:
  //   }
  // }
}

export const apartmentsStore = new ApartmentsStore()
