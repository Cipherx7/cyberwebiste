import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

import Providers from './providers'

const saira = Saira({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberX',
  description: 'CyberX',
  verification: {
    google: 'NK_YRyzH-6vt7WN_fUlh27kl9Rbv60jNBhDY_H7oLb8'
  }
}
import { Footer } from './components/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={saira.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
