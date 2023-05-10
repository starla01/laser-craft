import Link from 'next/link'
import styles from './homeItems.module.sass'

import { Roboto } from 'next/font/google'

const catalogo = [
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  },
  {
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  }
  ,{
    name: 'Lamparas de luz NEON',
    desc: 'Lampara de acrilico con luz neon RGB que puedes manipular con un control remoto y calibrar la intensidad de luz',
    price: '$300.00',
    photo: '/images/catalogo/lampara_star_wars.jpg'
  }
]

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400','700'],
  display: 'swap',
});
 

export default function homeItems ({ type }) {
  return (
      <section className={styles.listItems}>
        <div className={styles.containerItems}>
          {
            catalogo.map(({name, desc, price, photo}, key) => {
              return <div key={key} className={styles.item}>
                <img src={photo} alt={desc} width="100%" />
                <div className={styles.dataContent}>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.desc}>{desc}</p>
                  <p className={styles.price}>{price}</p>
                  <div className={styles.more}>Ver más</div>
                </div>
              </div>
            })
          }
        </div>
      </section>
    )
}
