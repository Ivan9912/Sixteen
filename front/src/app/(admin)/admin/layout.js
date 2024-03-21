import { Inter } from 'next/font/google'
import '@/app/(general)/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadataAdmin = {
  title: 'admin',
  description: 'Sixteen v1.0',
  content:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-419">
      <body className={`${inter.className} bg-[#f5f5f5] web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color`}>
        {children}
      </body>
    </html>
  )
}