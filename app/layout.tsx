import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Any Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider/>
        <ModalProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
