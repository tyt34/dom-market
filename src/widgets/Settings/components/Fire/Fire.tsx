import styles from './Fire.module.scss'

export const Fire = () => {
  return (
    <div className={styles.zoneWrap}>
      <div className={styles.zone}>
        <div className={styles.magnets}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.sphere}>
          <div className={styles.core} />
        </div>
      </div>
    </div>
  )
}
