import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads by ismail',
  description: 'This is a try to clone threads website by ismail sossi alaoui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div>
        <Topbar />
        <main className='flex flex-row'>
          <LeftSidebar />
          <section className='main-container'>
            <div className='w-full max-w-4xl'>
              {children}
            </div>
            </section>

          <RightSidebar />
        </main>
        <Bottombar />
        </div>
        </body>
    </html>
    </ClerkProvider>
  )
}
