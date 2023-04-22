import Link from 'next/link'
import styles from './menu.module.css'
import { RiMapPinUserFill } from 'react-icons/ri'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Menu ({ type }) {
  return (
    (type === 'full' &&
      <div className={`${styles.menuFull} ${roboto.className}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <picture>
              <img src='/images/logo_laser_craft_white.png' alt='' />
            </picture>
            <p className='logotipo'>Laser Craft</p>
          </div>
          <div className={styles.nav}>
            <ul className={styles.options}>
              <li>
                <Link href='/about'>¿Quienes somos?</Link>
              </li>
              <li>
                Eventos|Mis eventos full
              </li>
              <li><RiMapPinUserFill size={30} /></li>
            </ul>
          </div>
        </div>
      </div>) || (
        <div className={`${styles.menu} ${roboto.className}`}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <picture>
                <img src='/images/logo_laser_craft_white.png' alt='' />
              </picture>
              <p className={styles.logotipo}>Laser <b>Craft</b></p>
            </div>
            <div className={styles.nav}>
              <ul className={styles.options}>
                <li>
                  <Link href='/about'>¿Quienes somos?</Link>
                </li>
                <li>
                  Eventos|Mis eventos
                </li>
                <li><RiMapPinUserFill size={30} /></li>
              </ul>
            </div>
          </div>
        </div>
    )
  )
}
