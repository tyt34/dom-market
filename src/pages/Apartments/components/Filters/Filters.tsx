import { SelectCustom } from '@components/SelectCustom'
import styles from './Filters.module.scss'
import {
  OPTIONS_AREA,
  OPTIONS_CITY,
  OPTIONS_HOME,
  OPTIONS_ROOMS,
} from './Filters.constants'
import { ToggleGroupCustom } from '@components/ToggleGroupCustom'
import { Button } from '@mui/material'
import { useState } from 'react'
import { apartmentsStore } from '@pages/Apartments/apartmentsStore'
import { observer } from 'mobx-react-lite'

export const Filters = observer(() => {
  const { isShowList, changeIsShowList, filters, setFilter } =
    apartmentsStore

  const [isAllOptions, setIsAllOptions] = useState<boolean>(false)

  const handleFilter = () => {
    setIsAllOptions(true)
  }

  const handleShowList = () => {
    changeIsShowList(!isShowList)
  }

  return (
    <div className={styles.wrapper}>
      {isAllOptions && (
        <SelectCustom
          options={OPTIONS_CITY}
          label="Город"
          onChange={(value) => {
            setFilter('city', value)
          }}
          value={filters.city}
        />
      )}
      <SelectCustom
        options={OPTIONS_HOME}
        label="Вид"
        onChange={(value) => {
          setFilter('homeType', value)
        }}
        value={filters.homeType}
      />
      <SelectCustom
        options={OPTIONS_AREA}
        label="Район"
        value={filters.area}
        onChange={(value) => {
          setFilter('area', value)
        }}
      />
      <ToggleGroupCustom
        label="Комнаты"
        options={OPTIONS_ROOMS}
        onChange={(value) => {
          setFilter('rooms', value)
        }}
        value={filters.rooms}
      />

      {!isAllOptions && (
        <div className="center">
          <button onClick={handleFilter}>
            <span className="white w-700 t-13 underline font-s mt-[12] mb-[18]">
              Расширенный фильтр
            </span>
          </button>
        </div>
      )}

      <Button
        variant="contained"
        onClick={handleShowList}
      >
        {isShowList ? 'Скрыть' : 'Показать'}
      </Button>
    </div>
  )
})
