'use client'

import { useState } from 'react'
import styles from './page.module.css'

import Categories from './components/categories'
import Separator from './components/separator'
import Modal from './components/Modal'

export default function Home () {
  const [modalActive, setModalActive] = useState(false)

  function handleModal () {
    setModalActive(!modalActive)
  }

  return (
    <main className={styles.main}>
      {
        modalActive && (
          <Modal handleModal={handleModal}>
            Hello
          </Modal>
        )
      }
      <Separator title='Categorías más comúnes' />
      <Categories />
    </main>
  )
}
