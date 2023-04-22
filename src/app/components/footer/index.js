import styles from './footer.module.css'

import {
  AiOutlineTwitter
} from 'react-icons/ai'

import {
  FaFacebook,
  FaYoutube,
  FaTwitch
} from 'react-icons/fa'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Footer () {
  return (
    <div className={`${styles.footer} ${roboto.className}`}>
      <div className={styles.blocks}>
        <div className={styles.blockMain}>
          <p className={styles.titleLogo}>
            <img src='/images/logo_laser_craft_white.png' alt='DigInvite' width='40px' />
            <span className={roboto.className}>Laser<b>Craft</b></span>
          </p>
        </div>
        <div className={styles.block}>
        </div>
        <div className={styles.block}>
          <p>Producto</p>
          <ul className={styles.listFooter}>
            <li>Eventos</li>
            <li>Invitaciones</li>
            <li>Eventos</li>
            <li>Invitaciones</li>
          </ul>
        </div>
        <div className={styles.block}>
          <p>Soporte</p>
          <ul className={styles.listFooter}>
            <li>Eventos</li>
            <li>Invitaciones</li>
            <li>Eventos</li>
            <li>Invitaciones</li>
            <li>Eventos</li>
            <li>Invitaciones</li>
          </ul>
        </div>
        <div className={styles.block}>
          <p>Compañia</p>
          <ul className={styles.listFooter}>
            <li>Eventos</li>
            <li>Invitaciones</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerIn}>
        <div className={styles.disclaimer}>
          © 2023 Laser<b>Craft</b>, Inc. Términos y privacidad (actualizados a 03/2023) ¿Que es Laser<b>Craft</b>?
        </div>
        <div className={styles.social}>
          <FaFacebook size={24} className={styles.facebook} />
        </div>
      </div>
    </div>
  )
}
