import '../styles/globals.css'



export const metadata = {
  title: 'Spacehip',
  description: 'SpaceShip is an amazing app that showcase the beauty of web animation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
