import { SelectCustom } from '@components/SelectCustom'
import styles from './Filters.module.scss'
import {
  OPTIONS_AREA,
  OPTIONS_HOME,
  OPTIONS_ROOMS,
} from './Filters.constants'
import { ToggleGroupCustom } from '@components/ToggleGroupCustom'
// import background from './assets/background.png'

export const Filters = () => {
  return (
    <div className={styles.wrapper}>
      <SelectCustom
        options={OPTIONS_HOME}
        label="Вид"
        onChange={() => {}}
        value=""
      />
      <SelectCustom
        options={OPTIONS_AREA}
        label="Район"
        onChange={() => {}}
        value=""
      />
      <ToggleGroupCustom
        label="Комнаты"
        onChange={() => {}}
        value=""
        options={OPTIONS_ROOMS}
      />
    </div>
  )
}
