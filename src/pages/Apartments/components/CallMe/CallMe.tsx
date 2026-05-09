import {
  Button,
  Checkbox,
  InputAdornment,
  TextField,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { PhoneField } from '@components/PhoneField'
import { useBreakpoints } from '@shared/hooks/useBreakpoints'
import user from './assets/user.svg'
import styles from './CallMe.module.scss'
import { INPUT_STYLES } from '@shared/styles/styles'

export const CallMe = () => {
  const { isDesktop } = useBreakpoints()

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
          InputProps={{
            startAdornment: isDesktop ? (
              <InputAdornment position="start">
                <img
                  className="ml-[10]"
                  src={user}
                  alt="mark"
                />
              </InputAdornment>
            ) : null,
          }}
        />

        <PhoneField />

        <label className={styles.labelMobile}>
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
            height: {
              xs: '63px',
              xl: '80px',
            },
            borderRadius: '4px',
            width: {
              xl: '100%',
            },
          }}
        >
          Перезвоните мне
        </Button>
      </div>

      <label className={styles.labelDesktop}>
        <div className={styles.checkboxWrapper}>
          <Checkbox />
        </div>
        <p className="black-2 t-9 w-500">
          Оставляя свои персональные данные, Вы даете добровольное
          согласие на их обработку. <Link to={''}>Подробнее</Link>
        </p>
      </label>
    </div>
  )
}
