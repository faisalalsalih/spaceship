import '../styles/globals.css'
import { Eudoxus_Sans } from 'next/font/google'

const eudoxus = Eudoxus_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'Spacehip',
  description: 'SpaceShip is an amazing app that showcase the beauty of web animation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={eudoxus.className}>{children}</body>
    </html>
  )
}
