import styles from './categories.module.sass'

// Icons
import Wedding from '../icons/Wedding'
import Bautizo from '../icons/Bautizo'
import Birthday from '../icons/Birthday'
import Pascua from '../icons/Pascua'
import Comunion from '../icons/Comunion'
import Celebration from '../icons/Celebration'
import Halloween from '../icons/Halloween'
import Christmas from '../icons/Christmas'

import { Open_Sans } from 'next/font/google'

const roboto = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

const categories = [
  {
    name: 'Boda',
    icon: <Wedding />,
    key: 0
  },
  {
    name: 'Cumpleaños',
    icon: <Birthday />,
    key: 0
  },
  {
    name: 'Pascua',
    icon: <Pascua />,
    key: 0
  },
  {
    name: 'Primera comunión',
    icon: <Comunion />,
    key: 0
  },
  {
    name: 'Bautizo',
    icon: <Bautizo />,
    key: 0
  },
  {
    name: 'Despedida de solteros',
    icon: <Celebration />,
    key: 0
  },
  {
    name: 'Halloween',
    icon: <Halloween />,
    key: 0
  },
  {
    name: 'Navidad',
    icon: <Christmas />,
    key: 0
  }
]

export default function Categories () {
  return (
    <div className={`${styles.categories} ${roboto.className}`}>
      <div className={styles.containerCategories}>
        {
          categories.map((cat, key) => {
            return (
              <div key={key} className={styles.category}>
                <p className={styles.icon}>{cat.icon}</p>
                <p className={styles.font}>{cat.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
