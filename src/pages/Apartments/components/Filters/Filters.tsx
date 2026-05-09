import {
  OPTIONS_AREA,
  OPTIONS_CITY,
  OPTIONS_HOME,
  OPTIONS_ROOMS_MOBILE,
  OPTIONS_ROOMS_DESKTOP,
  OPTIONS_TYPE_DEAL,
  OPTIONS_TYPE_PRICE,
  OPTIONS_SUPER,
  OPTIONS_ADDRESS,
} from './Filters.constants'
import { apartmentsStore } from '@pages/Apartments/apartmentsStore'
import { AutocompleteCustom } from '@components/AutocompleteCustom'
import { Button } from '@mui/material'
import { CheckboxFilter } from '@components/CheckboxFilter'
import { ImageRadioGroup } from '@components/ImageRadioGroup'
import { observer } from 'mobx-react-lite'
import { SelectCustomDesktop } from '@components/SelectCustomDesktop'
import { SelectCustomMobile } from '@components/SelectCustomMobile'
import { ToggleGroupCustom } from '@components/ToggleGroupCustom'
import { useState } from 'react'
import setting from './assets/setting.svg'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Filters.module.scss'

export const Filters = observer(() => {
  const { isShowList, changeIsShowList, filters, setFilter } =
    apartmentsStore

  const [isAllOptions, setIsAllOptions] = useState<boolean>(false)

  const handleFilter = () => {
    setIsAllOptions((state) => !state)
  }

  const handleShowList = () => {
    changeIsShowList(!isShowList)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.filterMobile}>
          <AnimatePresence initial={false}>
            {isAllOptions && (
              <motion.div
                className={styles.filterMobile}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <SelectCustomMobile
                  options={OPTIONS_CITY}
                  label="Город"
                  onChange={(value) => {
                    setFilter('city', value)
                  }}
                  value={filters.city}
                />

                <AutocompleteCustom
                  options={OPTIONS_ADDRESS}
                  label="Поиск по адресу"
                  value={filters.location}
                  onChange={(value) => {
                    setFilter('location', value)
                  }}
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
              </motion.div>
            )}
          </AnimatePresence>
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

          <div className="center">
            <button onClick={handleFilter}>
              <span className="white w-700 t-13 underline font-s mt-[12] mb-[18]">
                {!isAllOptions
                  ? 'Расширенный фильтр'
                  : 'Скрыть расширенный фильтр'}
              </span>
            </button>
          </div>

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
              value={filters.rooms}
              onChange={(value) => {
                setFilter('rooms', value)
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

          <div className={`${styles.row} mt-[23]`}>
            <AutocompleteCustom
              options={OPTIONS_ADDRESS}
              label="Поиск по адресу"
              value={filters.location}
              onChange={(value) => {
                setFilter('location', value)
              }}
            />
          </div>

          <div className={`${styles.bottom} mt-[23]`}>
            <div className={styles.bottomLeft}>
              <Button
                variant="contained"
                sx={{
                  height: '80px',
                  width: '88px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(190, 175, 153, 1)',
                }}
              >
                <img
                  src={setting}
                  alt="mark"
                />
              </Button>

              <p className="t-18">Ещё 5 фильтров</p>
            </div>

            <div className={styles.bottomLeft}>
              <p className="t-18">7 тыс. объявлений</p>
              <Button
                variant="contained"
                sx={{
                  height: '80px',
                  width: '368px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(219, 154, 152, 1)',
                }}
                onClick={handleShowList}
              >
                <p className="t-24 w-600">
                  {isShowList ? 'Скрыть' : 'Показать'}
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
