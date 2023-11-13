import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
  title: 'TodoList',
  description: 'Create your own todo list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>Header</header>

        <main>{children}</main>
      </body>
    </html>
  )
}
