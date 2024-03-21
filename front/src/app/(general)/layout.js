import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Main-Nav/NavBar.jsx';
import Footer from '@/components/Main-Footer/Footer.jsx';
import CircleMenu from '@/components/Circle-Animation/circleMenu.jsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: 'Sixteen v1.0',
  content:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-419" dir="ltr">
      <body className={`${inter.className} bg-[#f5f5f5] web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color antialiased`}>
        <NavBar />
        {children}
        <CircleMenu colorCicle={'#ec489926'} colorCicleHover={'#ec4899'} />
        <Footer />
      </body>
    </html>
  )
}