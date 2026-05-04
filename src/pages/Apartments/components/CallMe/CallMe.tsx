import { TextField } from '@mui/material'
import styles from './CallMe.module.scss'
import { PhoneField } from '@components/PhoneField'
import { INPUT_STYLES } from '@shared/styles/styles'

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
      </div>
    </div>
  )
}
