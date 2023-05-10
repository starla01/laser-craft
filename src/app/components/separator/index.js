import styles from './separator.module.sass'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Separator ({ title }) {
  return (
    <div className={`${styles.separator} ${roboto.className}`}>
      <p className={styles.title}>{title}</p>
      <div className={styles.border} />
    </div>
  )
}
