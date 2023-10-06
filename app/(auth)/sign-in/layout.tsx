export const metadata = {
  title: 'Threads clone',
  description: 'Threads clone developed by Ismail Sossi Alaoui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
