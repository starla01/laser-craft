'use client'

import { Roboto } from 'next/font/google';
import { useState } from 'react'
import styles from './page.module.sass'

import Categories from './components/categories'
import Separator from './components/separator'
import Modal from './components/modal'
import HomeItems from './components/homeItems'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
 

export default function Home () {
  const [modalActive, setModalActive] = useState(false)

  function handleModal () {
    setModalActive(!modalActive)
  }

  return (
    <main className={`${styles.main} ${roboto.className}`} >
      {
        modalActive && (
          <Modal handleModal={handleModal}>
            Hello
          </Modal>
        )
      }
      <Separator title='Categorías más comúnes' />
      <Categories />
      <HomeItems />
    </main>
  )
}
