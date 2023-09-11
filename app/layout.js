import './css/globals.css'
import { Rubik } from 'next/font/google' 

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive comment section',
  description: 'Learn Nextjs from scratch',
  keyword: 'Nextjs Crash Course',
  author: 'ChineduCode',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <>
          <main>{children}</main>
        </>
      </body>
    </html>
  )
}
