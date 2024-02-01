import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZinTools',
  description: 'ZinTools Web app by Aftab Rehan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="w-full min-h-[calc(100vh-144px)] mt-36">
          <div className="w-full max-w-7xl mx-auto h-full">{children}</div>
        </main>
        <div
          id="modal"
          className="flex items-center justify-center w-screen h-screen fixed top-0 left-[50%] translate-x-[-50%] z-1000 overflow-y-hidden pointer-events-none"
        />
        <Footer />
      </body>
    </html>
  )
}
