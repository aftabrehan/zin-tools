import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

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
        <ThemeProvider attribute="class">
          <Header />

          <main className="w-full min-h-[calc(100vh-144px)] mt-36 bg-slate-50 dark:bg-[#080f15]">
            <div className="w-full max-w-[1432px] sm:max-w-[1464px] mx-auto h-full px-4 sm:px-8 py-8 sm:py-16">
              {children}
            </div>
          </main>
          <div
            id="modal"
            className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-10 overflow-y-hidden pointer-events-none"
          />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
