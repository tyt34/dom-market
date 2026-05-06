import whatsapp from './assets/whatsapp.svg'
import phone from './assets/phone.svg'
import mail from './assets/mail.svg'
import location from './assets/location.svg'
import styles from './FooterTop.module.scss'

export const FooterTop = () => {
  return (
    <div className={`${styles.wrapper} white`}>
      <div className={styles.text}>
        <div className={styles.top}>
          <p className={`${styles.contacts} t-23 w-500`}>Контакты</p>
          <div className="t-24 w-600 mt-[8]">
            <div className={styles.linePhonesMobile}>
              <div className={styles.firstPhone}>
                <img
                  className={styles.iconPhone}
                  src={phone}
                  alt="phone"
                />
                <span className="w-600 t-14"> 8 (8442) 52-05-05, </span>
              </div>
              <span className="w-600 t-14"> 8 (927) 512-05-05 </span>
            </div>

            <div className={styles.linePhonesDesktop}>
              <img
                className={styles.iconPhone}
                src={phone}
                alt="phone"
              />

              <div className={styles.phones}>
                <span className="w-600 t-14"> 8 (8442) 52-05-05 </span>
                <span className="w-600 t-14"> 8 (927) 512-05-05 </span>
              </div>
            </div>
          </div>

          <div className={`${styles.line} ${styles.sb}`}>
            <div className={`${styles.rightSide}`}>
              <img
                className={styles.iconWhatsapp}
                src={whatsapp}
                alt="whatsapp"
              />
              <span className="t-13 w-500">WhatsApp</span>
            </div>

            <div className={`${styles.rightSide}`}>
              <img
                className={styles.iconMail}
                src={mail}
                alt="mail"
              />
              <span className="t-13 w-400 underline">
                info@jivem-doma.ru
              </span>
            </div>
          </div>
        </div>

        <div className={styles.addresses}>
          <div className={styles.location}>
            <img
              src={location}
              alt="location"
              className="mt-[2]"
            />

            <div>
              <p className="t-9-15 w-700">Волгоград</p>
              <p className="t-12 w-400">
                ул. им. Маршала Рокоссовского, д. 51
              </p>
            </div>
          </div>

          <div className={styles.location}>
            <img
              src={location}
              alt="location"
              className="mt-[2]"
            />

            <div>
              <p className="t-9-15 w-700">Волгоград</p>
              <p className="t-12 w-400">
                пр-т Университетский, д. 64 (1 этаж, офис 111)
              </p>
            </div>
          </div>

          <div className={styles.location}>
            <img
              src={location}
              alt="location"
              className="mt-[2]"
            />

            <div>
              <p className="t-9-15 w-700">Волжский</p>
              <p className="t-12 w-400">ул. Ленина, д. 79Б (4 этаж)</p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        className={styles.iframe}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.7701237552663!2d44.50652701337872!3d48.7199122199605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x411acb6a5ecef251%3A0x5917479f1677ac6!2z0JbQuNCy0LXQvCDQlNC-0LzQsA!5e1!3m2!1sru!2sru!4v1777971840511!5m2!1sru!2sru"
        width="100%"
        height="176"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  )
}
