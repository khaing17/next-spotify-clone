import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import ModalProvider from '@/providers/ModalProvider'
import UserProvider from '@/providers/UserProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Dev - Play it everywhere!',
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
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar>
              {children}
            </SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html >
  )
}
