import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import TopBar from '@/components/shared/TopBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'

export const metadata = {
  title: 'Clone Threads',
  description: 'A clone of Threads app by Next.js 13'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <TopBar />
          <main>
            <LeftSideBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
