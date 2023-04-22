import './globals.css'

import Menu from './components/menu'
import Hero from './components/hero'
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
        <Hero>
          <Menu />
          <Banner />
        </Hero>
        {children}
        <Footer />
      </body>
    </html>
  )
}
