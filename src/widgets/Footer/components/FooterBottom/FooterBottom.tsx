import styles from './FooterBottom.module.scss'

export const FooterBottom = () => {
  return (
    <div className={`${styles.wrapper} white`}>
      <div className={`${styles.top} w-500 t-9-17`}>
        <p>Ждём вас в гости!</p>
        <p>© Живём дома, 2012 – {new Date().getFullYear()}</p>
      </div>

      <div className={styles.right}>
        <p className="t-7 mt-[7]">
          Информация, указанная на данном сайте, носит ознакомительный
          характер и не является публичной офертой
        </p>

        <div className={styles.desktop}>
          <p className="t-7">
            Сайт работает при поддержке студии ClickON
          </p>
        </div>
      </div>

      <div className={styles.mobile}>
        <p className="t-7 mt-[2]">
          Сайт работает при поддержке студии ClickON
        </p>
      </div>
    </div>
  )
}
