import './globals.css'
import {Ubuntu} from 'next/font/google'

const raleway = Ubuntu({subsets: ['latin'], weight: ['300', '400', '500', '700']})

export const metadata = {
  title: "Adnan's Portfolio",
  description: 'My Portfolio'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={raleway.className} style={{backgroundImage: 'url(/images/Hexagon.svg)'}}>
        {children}
      </body>
    </html>
  )
}
