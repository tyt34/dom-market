import { Button, Checkbox, TextField } from '@mui/material'
import styles from './CallMe.module.scss'
import { PhoneField } from '@components/PhoneField'
import { INPUT_STYLES } from '@shared/styles/styles'
import { Link } from 'react-router-dom'

export const CallMe = () => {
  return (
    <div className={styles.wrapper}>
      <p className="black-2 t-23 w-500">
        Не хочу искать, перезвоните мне!
      </p>

      <div className={styles.inputs}>
        <TextField
          placeholder="Ваше имя"
          variant="outlined"
          fullWidth
          sx={INPUT_STYLES}
        />

        <PhoneField />

        <label className={styles.label}>
          <div className={styles.checkboxWrapper}>
            <Checkbox />
          </div>
          <p className="black-2 t-9 w-500">
            Оставляя свои персональные данные, Вы даете добровольное
            согласие на их обработку. <Link to={''}>Подробнее</Link>
          </p>
        </label>

        <Button
          variant="contained"
          sx={{
            height: '63px',
            borderRadius: '4px',
          }}
        >
          Перезвоните мне
        </Button>
      </div>
    </div>
  )
}
