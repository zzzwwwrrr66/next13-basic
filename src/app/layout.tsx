import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GlobalLayout from '@/components/GlobalLayout'
import { handleMetaData } from '@/const/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = handleMetaData('wooram home', 'wooram home description');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalLayout>
      {children}
    </GlobalLayout>
  )
}
