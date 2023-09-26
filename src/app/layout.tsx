import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header, Footer } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '社内向け書類アップロードサービス',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
