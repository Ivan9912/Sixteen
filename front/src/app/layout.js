import { Inter } from 'next/font/google'
import NavBar from '@/components/Main-Nav/NavBar.jsx'
import Footer from '@/components/Main-Footer/Footer.jsx'
import './globals.css'
import CircleMenu from '@/components/Circle-Animation/circleMenu.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sixteen | CodeCraze',
  description: 'Sixteen v1.0',
   content:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-419">
      <body className={inter.className}>
        <NavBar />
        {children}
        <CircleMenu />
        <Footer />
      </body>
    </html>
  )
}