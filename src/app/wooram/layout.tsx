import GlobalLayout from '@/components/GlobalLayout'
import { handleMetaData } from '@/const/metadata'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
const inter = Inter({ subsets: ['latin'] })

export const metadata  = handleMetaData('post and list');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies();
  const auth = cookieStore.get('auth')
  console.log("cookieStore auth", auth);

  return (
    // auth something do auth ? <></> : <></>
    <GlobalLayout>
      {children}
    </GlobalLayout>
  )
}
