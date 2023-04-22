import './globals.css'
import styles from './page.module.css'

import Menu from './components/menu'
import Banner from './components/banner'
import Footer from './components/footer'

export const metadata = {
  title: 'Digi-Invite',
  description: 'Sitio de eventos especiales'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className={styles.hero}>
          <Menu />
          <Banner />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
