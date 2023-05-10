import '../globals.sass'

import Menu from '../components/menu'
import Footer from '../components/footer'

export const metadata = {
  title: 'Digi-Invite',
  description: 'Sitio de eventos especiales'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Menu type='full' />
        {children}
        <Footer />
      </body>
    </html>
  )
}
