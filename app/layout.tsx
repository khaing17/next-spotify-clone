import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Music is everything!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
          {children}
        </SideBar>
      </body>
    </html>
  )
}
