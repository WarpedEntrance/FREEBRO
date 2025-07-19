import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'free ro',
  description: 'bro',
  generator: 'vro',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
