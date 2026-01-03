import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'

import Providers from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'CyberX',
  description: 'CyberX',
  verification: {
    google: 'NK_YRyzH-6vt7WN_fUlh27kl9Rbv60jNBhDY_H7oLb8'
  }
}
import { Footer } from './components/Footer'

import { ScrollProgress } from './components/ScrollProgress'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-primary text-white`}>
        <ScrollProgress />
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
