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
    // localStorage 나 browser cookie를 사용해서 해야하기 때문에 "user client" 필수 -> nextServer 경유해서 어떻게 하면 서버컴포넌트에서 될지도 모르지만
    // add authProvider or GlobalLayout 에서 nav 이런것만 없앨지 비지니스모델마다 다르게 
    // <AuthProvider><GlobalLayout>{children}</GlobalLayout></AuthProvider>
    <GlobalLayout>
      {children}
    </GlobalLayout>
  )
}
