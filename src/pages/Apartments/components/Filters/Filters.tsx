import { SelectCustom } from '@components/SelectCustom'
import styles from './Filters.module.scss'
import { OPTIONS_AREA, OPTIONS_HOME } from './Filters.constants'
// import background from './assets/background.png'

export const Filters = () => {
  return (
    <div className={styles.wrapper}>
      <SelectCustom
        options={OPTIONS_HOME}
        label="Вид"
      />
      <SelectCustom
        options={OPTIONS_AREA}
        label="Район"
      />
    </div>
  )
}

/* 
      1. Select: квартира / дом
      
      <FormControl size="small">
        <Select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <MenuItem value="central">Центральный</MenuItem>
          <MenuItem value="voroshilovsky">Ворошиловский</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <RadioGroup
          row
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        >
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="1"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="2"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="3"
          />
          <FormControlLabel
            value="4+"
            control={<Radio />}
            label="4+"
          />
        </RadioGroup>
      </FormControl> */
