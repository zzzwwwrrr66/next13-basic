import '@/style/globals.css'
export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <html lang="ja">
  <body >{children}</body>
</html>
}