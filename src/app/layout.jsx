import Navbar from './components/Navbar'
import { Roboto } from 'next/font/google'
import '../app/global.css'

export const metadata = {
  title: 'portfolio',
  description: 'jp portfolio web'
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title> JP </title>
      </head>
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
