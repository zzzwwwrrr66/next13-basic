"use client"

import '@/style/globals.css'
export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("window.localStorage check", window.localStorage);
  const isUser = false;
  
  if(!isUser) return (
    <html lang="ja">
      <body >
        {children}
      </body>
    </html>
  )

  return (
  <html lang="ja">
    <body >
      nav
      {children}
    </body>
  </html>
)
}