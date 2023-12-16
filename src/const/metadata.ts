import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const handleMetaData = (title= "wooram", description= "wooram\'s page"): Metadata => {
  return {
    title,
    description
  }
}
export const metadata: Metadata = {
  title: 'wooram home',
  description: 'wooram home description',
}
