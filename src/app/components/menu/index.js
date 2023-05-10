import Link from 'next/link'
import styles from './menu.module.sass'
import { RiMapPinUserFill } from 'react-icons/ri'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
 

export default function Menu ({ type }) {
  return (
    (type === 'full' &&
      <div className={`${styles.menuFull} ${roboto.className}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <picture>
              <img src='/images/logo_laser_craft_white.png' alt='' />
            </picture>
          </div>
          <div className={styles.nav}>
            <ul className={styles.options}>
              <li>
                <Link href='/about'>¿Quienes somos?</Link>
              </li>
              <li>
                Catálogo
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
            </div>
            <div className={styles.nav}>
              <ul className={styles.options}>
                <li>
                  <Link href='/about'>¿Quienes somos?</Link>
                </li>
                <li>
                  Catálogo
                </li>
                <li><RiMapPinUserFill size={30} /></li>
              </ul>
            </div>
          </div>
        </div>
    )
  )
}
