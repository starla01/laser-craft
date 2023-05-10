import styles from './modal.module.sass'

import { Open_Sans } from 'next/font/google'

import { IoIosCloseCircleOutline } from "react-icons/io";

const roboto = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Modal ({ children, handleModal }) {
  return (
    <div className={`${styles.modal} ${roboto.className}`}>
      <div className={styles.close} onClick={handleModal}>
        <IoIosCloseCircleOutline size={40} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
