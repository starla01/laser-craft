'use client'
import { useState } from 'react'
import styles from './banner.module.sass'

export default function Banner () {
  const [pos, setPos] = useState(0)
  const slides = [
    {
      image: '/images/lamparas.jpg',
      type: 'wedding',
      url: '/invitaciones',
      back: '#000000'
    },
    {
      image: '/images/lamparas.jpg',
      type: 'bidthday',
      url: '/invitaciones',
      back: '#c44343'
    }
  ]

  console.log({ pos })
  console.log((pos * 100) / slides.length)

  return (
    <div className={styles.banner}>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbBox}>
          {
            slides.map((el, key) => {
              return (
                <div
                  key={key}
                  className={`${styles.bullet} ${key === pos && styles.active}`}
                  onClick={() => setPos(key)}
                />
              )
            })
          }
        </div>
      </div>
      <div className={styles.container}>
        <div
          style={{ left: `-${(pos * 100)}%`, width: `${100 * slides.length}%` }}
          className={styles.containerInt}
        >
          {
            slides.map(({ image, type, url, back }, key) => {
              return (
                <div
                  key={key}
                  className={styles.bann}
                  style={{ backgroundColor: back, width: `${(100 * slides.length) / slides.length}%` }}
                >
                  <picture>
                    <img src={image} alt='Flowers' className={styles.image} />
                  </picture>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
