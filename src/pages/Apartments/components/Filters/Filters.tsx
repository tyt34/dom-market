import { SelectCustomMobile } from '@components/SelectCustomMobile'
import styles from './Filters.module.scss'
import {
  OPTIONS_AREA,
  OPTIONS_CITY,
  OPTIONS_HOME,
  OPTIONS_ROOMS_MOBILE,
  OPTIONS_ROOMS_DESKTOP,
  OPTIONS_TYPE_DEAL,
  OPTIONS_TYPE_PRICE,
  OPTIONS_SUPER,
} from './Filters.constants'
import { ToggleGroupCustom } from '@components/ToggleGroupCustom'
import { Button } from '@mui/material'
import { useState } from 'react'
import { apartmentsStore } from '@pages/Apartments/apartmentsStore'
import { observer } from 'mobx-react-lite'
import { ImageRadioGroup } from '@components/ImageRadioGroup'
import { SelectCustomDesktop } from '@components/SelectCustomDesktop'
import { CheckboxFilter } from '@components/CheckboxFilter'

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
    <>
      <div className={styles.wrapper}>
        <div className={styles.filterMobile}>
          {isAllOptions && (
            <>
              <SelectCustomMobile
                options={OPTIONS_CITY}
                label="Город"
                onChange={(value) => {
                  setFilter('city', value)
                }}
                value={filters.city}
              />

              <SelectCustomMobile
                options={OPTIONS_TYPE_DEAL}
                label="Тип сделки"
                onChange={(value) => {
                  setFilter('deal', value)
                }}
                value={filters.deal}
              />

              <SelectCustomMobile
                options={OPTIONS_TYPE_PRICE}
                label="Способ оплаты"
                onChange={(value) => {
                  setFilter('price', value)
                }}
                value={filters.price}
              />

              <SelectCustomMobile
                options={OPTIONS_SUPER}
                label="Супер цена"
                onChange={(value) => {
                  setFilter('super', value)
                }}
                value={filters.super}
              />
            </>
          )}
          <SelectCustomMobile
            options={OPTIONS_HOME}
            label="Вид"
            onChange={(value) => {
              setFilter('homeType', value)
            }}
            value={filters.homeType}
          />

          <SelectCustomMobile
            options={OPTIONS_AREA}
            label="Район"
            value={filters.area}
            onChange={(value) => {
              setFilter('area', value)
            }}
          />
          <ToggleGroupCustom
            label="Комнаты"
            options={OPTIONS_ROOMS_MOBILE}
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

        <div className={styles.filterDesktop}>
          <ImageRadioGroup
            options={OPTIONS_HOME}
            onChange={(value) => {
              setFilter('homeType', value)
            }}
            value={filters.homeType}
          />

          <div className={`${styles.row} mt-[32]`}>
            <SelectCustomDesktop
              options={OPTIONS_ROOMS_DESKTOP}
              label="Комнаты"
              value={filters.area}
              onChange={(value) => {
                setFilter('area', value)
              }}
            />

            <SelectCustomDesktop
              options={OPTIONS_TYPE_DEAL}
              label="Тип сделки"
              onChange={(value) => {
                setFilter('deal', value)
              }}
              value={filters.deal}
            />

            <SelectCustomDesktop
              options={OPTIONS_TYPE_PRICE}
              label="Способ оплаты"
              onChange={(value) => {
                setFilter('price', value)
              }}
              value={filters.price}
            />
          </div>

          <div className={`${styles.row} mt-[23]`}>
            <SelectCustomDesktop
              options={OPTIONS_CITY}
              label="Город"
              onChange={(value) => {
                setFilter('city', value)
              }}
              value={filters.city}
            />

            <SelectCustomDesktop
              options={OPTIONS_AREA}
              label="Район"
              value={filters.area}
              onChange={(value) => {
                setFilter('area', value)
              }}
            />

            <CheckboxFilter
              options={OPTIONS_SUPER}
              // label="Супер цена"
              onChange={(value) => {
                setFilter('super', value)
              }}
              value={filters.super === OPTIONS_SUPER[0].value}
            />
          </div>
        </div>
      </div>
    </>
  )
})
