import type { Metadata } from 'next'

import StoreProvider from '@/store/StoreProvider'
import ThemeProvider from '@/common/themes/ThemeProvider'
import Header from '@/components/Header'
import Main from '@/components/Main/styles'
import Snackbar from '@/components/Snackbar'

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
      <body>
        <StoreProvider>
          <ThemeProvider>
            <Header />

            <Main>{children}</Main>

            <Snackbar />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
